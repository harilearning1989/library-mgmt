import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnIssuedBookComponent } from './return-issued-book.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {  path: '', component: ReturnIssuedBookComponent }
];

@NgModule({
  declarations: [
    ReturnIssuedBookComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ReturnIssuedBookModule { }
