import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {  path: '', component: HomeComponent,
    children: [
      {
        path: 'listAllBooks',
        loadChildren: () => import('../list-all-books/list-all-books.module').then(m => m.ListAllBooksModule)
      },
      {
        path: 'listAvailBooks',
        loadChildren: () => import('../list-avail-books/list-avail-books.module').then(m => m.ListAvailBooksModule)
      },
      {
        path: 'addBook',
        loadChildren: () => import('../add-book/add-book.module').then(m => m.AddBookModule)
      },
      {
        path: 'updateBook',
        loadChildren: () => import('../update-book/update-book.module').then(m => m.UpdateBookModule)
      },
      {
        path: 'returnBook',
        loadChildren: () => import('../return-issued-book/return-issued-book.module').then(m => m.ReturnIssuedBookModule)
      },
      {
        path: 'issuedBook',
        loadChildren: () => import('../list-issued-books/list-issued-books.module').then(m => m.ListIssuedBooksModule)
      },
      {
        path: 'deleteBook',
        loadChildren: () => import('../delete-book/delete-book.module').then(m => m.DeleteBookModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
      },
    ]}
];
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
