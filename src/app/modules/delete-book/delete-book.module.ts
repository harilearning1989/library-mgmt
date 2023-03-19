import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteBookComponent } from './delete-book.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {  path: '', component: DeleteBookComponent }
];
@NgModule({
  declarations: [
    DeleteBookComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ]
})
export class DeleteBookModule { }
