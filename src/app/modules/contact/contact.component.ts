import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Contact} from "../../models/contact/contact";
import {ContactService} from "../../services/contact/contact.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputValidation} from "../../validations/input-validation";
import {Utils} from "../../utils/utils";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  form!: FormGroup;
  loading = false;
  selectedRoles: string[] = [];

  constructor(
    private router: Router,
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]],
      mobile: ['', [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), InputValidation.cannotContainSpace]],
      email: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.value.roles=this.selectedRoles;
    console.log(this.form.value);
    this.loading = true;

    this.contactService.contactForm(this.form.value)
      .subscribe((data : any) => {
          console.log("Success Logged In");
          //this.router.navigate(['../login'], { relativeTo: this.route });
        },
        (error : any)=> {
            console.log("Register Failed ::"+error);
            this.loading = false;
        });
  }

  omitSpecialChars(event: KeyboardEvent) {
    return Utils.omitSpecialChars(event);
  }

  allowOnlyNumbers(event: KeyboardEvent){
    return Utils.allowOnlyNumbers(event);
  }

  omitSpaces(event: KeyboardEvent) {
    return Utils.omitSpaces(event);
  }
}
