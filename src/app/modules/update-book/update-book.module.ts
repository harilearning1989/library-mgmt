import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBookComponent } from './update-book.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {  path: '', component: UpdateBookComponent }
];

@NgModule({
  declarations: [
    UpdateBookComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UpdateBookModule { }
