import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddBookComponent} from "./add-book.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {  path: '', component: AddBookComponent }
];

@NgModule({
  declarations: [
    AddBookComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class AddBookModule { }
