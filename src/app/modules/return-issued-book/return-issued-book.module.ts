import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnIssuedBookComponent } from './return-issued-book.component';
import {RouterModule, Routes} from "@angular/router";
import {DataTablesModule} from "angular-datatables";

const routes: Routes = [
  {  path: '', component: ReturnIssuedBookComponent }
];

@NgModule({
  declarations: [
    ReturnIssuedBookComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        DataTablesModule
    ]
})
export class ReturnIssuedBookModule { }
