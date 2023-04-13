import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {AlertService} from "../../services/alert/alert.service";
import {InputValidation} from "../../validations/input-validation";
import {Utils} from "../../utils/utils";
import {IssueBookService} from "../../services/issue/issue-book.service";
@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss']
})
export class IssueBookComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  selectedRoles: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private issueBookService: IssueBookService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      studentId: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(10),InputValidation.cannotContainSpace]],
      studentName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]],
      subject: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]],
      bookName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(50)]],
      isbn: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20),InputValidation.cannotContainSpace]],
      authors: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(10),InputValidation.cannotContainSpace]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.form.value.roles=this.selectedRoles;
    console.log(this.form.value);
    this.loading = true;

    this.issueBookService.register(this.form.value)
      .subscribe((data : any) => {
          console.log("Success Logged In");
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          //this.router.navigate(['../login'], { relativeTo: this.route });
        },
        (error : any)=> {
          if(error.status == 200){
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          }else{
            console.log("Register Failed ::"+error);
            //this.alertService.error(error);
            this.loading = false;
          }
        });
  }

  omitSpecialChars(event: KeyboardEvent) {
    return Utils.omitSpecialChars(event);
  }

  allowOnlyNumbers(event: KeyboardEvent){
    return Utils.allowOnlyNumbers(event);
  }

}
