import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {RouterModule, Routes} from "@angular/router";
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import {DataTablesModule} from "angular-datatables";

const  listStudentModule= () => import('./list-student/list-student.module').then(x => x.ListStudentModule);
const  addStudentModule= () => import('./add-student/add-student.module').then(x => x.AddStudentModule);
const  updateStudentModule= () => import('./update-student/update-student.module').then(x => x.UpdateStudentModule);
const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);

const routes: Routes = [
  {  path: '', component: StudentComponent,
    children: [
      { path: 'list',loadChildren: listStudentModule},
      { path: 'add',loadChildren: addStudentModule},
      { path: 'update',loadChildren: updateStudentModule},
      { path: '', loadChildren: listStudentModule},
      { path: '**' ,data: { title: 'Page Not Module' },loadChildren: pageNotFoundModule}
    ]}
];
@NgModule({
  declarations: [
    StudentComponent,
    ListStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DataTablesModule
    ]
})
export class StudentModule { }
