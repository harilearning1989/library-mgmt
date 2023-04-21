import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InputValidation} from "../../../validations/input-validation";
import {Utils} from "../../../utils/utils";
import {BookService} from "../../../services/book/book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  selectedRoles: string[] = [];
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.formFields();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.value.roles = this.selectedRoles;
    console.log(this.form.value);
    this.loading = true;

    this.bookService.saveBook(this.form.value)
      .subscribe((data: any) => {
          console.log("Success Logged In");
          this.errorMessage = data.status +' '+ data.message;
          this.loading = false;
          this.submitted = false;
          this.formFields();
          //this.router.navigate(['../login'], { relativeTo: this.route });
        },
        (error: any) => {
          console.log("Submission Failed ::" + error);
          this.errorMessage = error;
          this.loading = false;
        });
  }

  omitSpecialChars(event: KeyboardEvent) {
    return Utils.omitSpecialChars(event);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    return Utils.allowOnlyNumbers(event);
  }

  private formFields() {
    this.form = this.formBuilder.group({
      bookName: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(100)]],
      subject: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(100)]],
      isbn: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20), InputValidation.cannotContainSpace]],
      authors: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(500)]],
      price: ['', [Validators.required, InputValidation.cannotContainSpace]],
      bookQty: ['', [Validators.required, Validators.maxLength(10)]],
      availBooks: ['', [Validators.required, Validators.maxLength(10)]],
      shortDescription: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(200)]],
      longDescription: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(500)]],
      publishedDate: ['', [Validators.required]]
    });
  }
}
