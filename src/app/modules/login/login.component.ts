import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {LoginService} from "../../services/login/login.service";
import {AlertService} from "../../services/alert/alert.service";
import {InputValidation} from "../../validations/input-validation";
import {Utils} from "../../utils/utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4),
        InputValidation.cannotContainSpace]],
      password: ['', [Validators.required, Validators.minLength(4),
        InputValidation.cannotContainSpace]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          //this.router.navigateByUrl(returnUrl);
          this.router.navigateByUrl('/home');
        },
        error: error => {
          console.log("Error::" + error);
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  omitSpecialCharsAndNumbers(event: KeyboardEvent) {
    return Utils.omitSpecialCharsAndNumbers(event);
  }

  omitSpecialChars(event: KeyboardEvent) {
   return Utils.omitSpecialChars(event);
  }
}
