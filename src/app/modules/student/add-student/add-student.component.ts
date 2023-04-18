import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book/book.service";
import {AlertService} from "../../../services/alert/alert.service";
import {InputValidation} from "../../../validations/input-validation";
import {Utils} from "../../../utils/utils";
import {StudentService} from "../../../services/student/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  selectedRoles: string[] = [];
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      studentId: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      email: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(30), InputValidation.cannotContainSpace]],
      studentName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(100)]],
      fatherName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(100)]],
      gender: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), InputValidation.cannotContainSpace]],
      category: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(5)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.errorMessage = '';
    this.submitted = true;
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.form.value.roles = this.selectedRoles;
    console.log(this.form.value);
    this.loading = true;

    this.studentService.saveStudent(this.form.value)
      .subscribe((data: any) => {
          console.log("Success Logged In");
          this.alertService.success('Added New Student successful', {keepAfterRouteChange: true});
          this.router.navigate(['../update'], { relativeTo: this.route });
        },
        (error: any) => {
          if (error.status == 200) {
            this.alertService.success('Added New Student successful', {keepAfterRouteChange: true});
          } else {
            console.log("Register Failed ::" + error);
            this.errorMessage = error.status+' '+error.error.message;
            //this.alertService.error(error);
            this.loading = false;
          }
        });
  }

  omitSpecialChars(event: KeyboardEvent) {
    return Utils.omitSpecialChars(event);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    return Utils.allowOnlyNumbers(event);
  }

  omitSpaces(event: KeyboardEvent) {
    return Utils.omitSpaces(event);
  }
}
