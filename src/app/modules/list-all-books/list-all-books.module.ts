import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllBooksComponent } from './list-all-books.component';
import {RouterModule, Routes} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import {ReadMorePipe} from "../../pipes/read-more.pipe";

const routes: Routes = [
  {  path: '', component: ListAllBooksComponent }
];@NgModule({
  declarations: [
    ListAllBooksComponent,
    ReadMorePipe
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        DataTablesModule
    ]
})
export class ListAllBooksModule { }
