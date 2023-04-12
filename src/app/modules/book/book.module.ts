import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import {RouterModule, Routes} from "@angular/router";

const addBookModule = () => import('../book/add-book/add-book.module').then(m => m.AddBookModule);
const updateBookModule = () => import('../book/update-book/update-book.module').then(m => m.UpdateBookModule);
const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);
const routes: Routes = [
  {  path: '', component: BookComponent,
    children: [
      { path: 'add', loadChildren: addBookModule},
      { path: 'update',loadChildren: updateBookModule},
      { path: '', loadChildren: addBookModule}
    ]},
  { path: '**' ,data: { title: 'Page Not Module' },loadChildren: pageNotFoundModule}
];
@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
