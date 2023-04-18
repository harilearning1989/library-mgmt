import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {RouterModule, Routes} from "@angular/router";
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import {DataTablesModule} from "angular-datatables";
import {ReactiveFormsModule} from "@angular/forms";

const  addStudentModule= () => import('./add-student/add-student.module').then(x => x.AddStudentModule);
const  updateStudentModule= () => import('./update-student/update-student.module').then(x => x.UpdateStudentModule);
const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);

const routes: Routes = [
  {  path: '', component: StudentComponent,
    children: [
      { path: 'add',loadChildren: addStudentModule},
      { path: 'update',loadChildren: updateStudentModule},
      { path: '', loadChildren: updateStudentModule},
      { path: '**' ,data: { title: 'Page Not Module' },loadChildren: pageNotFoundModule}
    ]}
];
@NgModule({
  declarations: [
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
