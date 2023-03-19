import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBookComponent } from './update-book.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngb-modal";

const routes: Routes = [
  {  path: '', component: UpdateBookComponent }
];

@NgModule({
  declarations: [
    UpdateBookComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ModalModule
  ]
})
export class UpdateBookModule { }
