import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Contact} from "../../models/contact/contact";
import {ContactService} from "../../services/contact/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
        (data: any) => this.model = data,
        (error: {}) => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
