import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {  path: '', component: ContactComponent }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
