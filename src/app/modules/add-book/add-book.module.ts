import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngb-modal";

const routes: Routes = [
  {  path: '', component: AddBookComponent }
];
@NgModule({
  declarations: [
    AddBookComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ModalModule
    ]
})
export class AddBookModule { }
