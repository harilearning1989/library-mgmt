import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IssueBookComponent} from "./issue-book.component";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {  path: '', component: IssueBookComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class IssueBookModule { }
