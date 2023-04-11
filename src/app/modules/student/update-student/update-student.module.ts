import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UpdateStudentComponent} from "./update-student.component";


const routes: Routes = [
  {  path: '', component: UpdateStudentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateStudentModule { }
