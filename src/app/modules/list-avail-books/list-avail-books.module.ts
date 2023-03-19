import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAvailBooksComponent } from './list-avail-books.component';
import {RouterModule, Routes} from "@angular/router";
import {DataTablesModule} from "angular-datatables";

const routes: Routes = [
  {  path: '', component: ListAvailBooksComponent }
];

@NgModule({
  declarations: [
    ListAvailBooksComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataTablesModule
  ]
})
export class ListAvailBooksModule { }
