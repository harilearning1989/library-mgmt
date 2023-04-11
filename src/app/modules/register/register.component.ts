import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {AlertService} from "../../services/alert/alert.service";
import {InputValidation} from "../../validations/input-validation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  selectedRoles: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4),
        InputValidation.cannotContainSpace]],
      lastName: ['', [Validators.required, Validators.minLength(4),
        InputValidation.cannotContainSpace]],
      email: ['', [Validators.required,
        Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required,
        Validators.minLength(10), Validators.maxLength(10),
        InputValidation.cannotContainSpace]],
      username: ['', [Validators.required, Validators.minLength(4),
        InputValidation.cannotContainSpace]],
      roles: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6),
        InputValidation.cannotContainSpace]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.form.value.roles=this.selectedRoles;
    console.log(this.form.value);
    this.loading = true;
    /*this.loginService.register(this.form.value)
      .subscribe({
        next: () => {
          console.log("Success Logged In");
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          console.log("Register Failed ::"+error);
          //this.alertService.error(error);
          this.loading = false;
        }
      });*/

    this.loginService.register(this.form.value)
      .subscribe((data : any) => {
          console.log("Success Logged In");
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
      },
      (error : any)=> {
        if(error.status == 200){
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        }else{
          console.log("Register Failed ::"+error);
          //this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  user_roles: any = [
    {name:'Admin', value:'ROLE_ADMIN', selected: false},
    {name:'Student', value:'ROLE_STUDENT', selected: false}
  ]

  onChangeCategory(event: any, role: any) {
    this.selectedRoles.push(role.value);
  }

  omitSpecialChars(event: KeyboardEvent) {
    let regex = new RegExp("^[a-zA-Z0-9 ]+$");
    let str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (event.which === 32){
      return false;
    }
    if (regex.test(str)) {
      return true;
    }
    event.preventDefault();
    return false;
  }


  omitSpecialCharsNumbers(event: KeyboardEvent) {
    //let regex = new RegExp("^[a-zA-Z0-9 ]+$");
    let regex = new RegExp("^[a-zA-Z ]+$");
    let str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (event.which === 32){
      return false;
    }
    if (regex.test(str)) {
      return true;
    }
    event.preventDefault();
    return false;
  }

}
