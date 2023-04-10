import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListIssuedBooksComponent} from "./list-issued-books.component";
import {DataTablesModule} from "angular-datatables";

const routes: Routes = [
  {  path: '', component: ListIssuedBooksComponent }
];
@NgModule({
  declarations: [
    ListIssuedBooksComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataTablesModule
  ]
})
export class ListIssuedBooksModule { }

