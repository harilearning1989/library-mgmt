import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";

const listAllBooksModule = () => import('../list-all-books/list-all-books.module').then(m => m.ListAllBooksModule);
const listAvailBooksModule = () => import('../list-avail-books/list-avail-books.module').then(m => m.ListAvailBooksModule);
const addBookModule = () => import('../add-book/add-book.module').then(m => m.AddBookModule);
const updateBookModule = () => import('../update-book/update-book.module').then(m => m.UpdateBookModule);
const returnIssuedBookModule = () => import('../return-issued-book/return-issued-book.module').then(m => m.ReturnIssuedBookModule);
const listIssuedBooksModule = () => import('../list-issued-books/list-issued-books.module').then(m => m.ListIssuedBooksModule);
const contactModule = () => import('../contact/contact.module').then(m => m.ContactModule);
const studentModule = () => import('../student/student.module').then(m => m.StudentModule);
const aboutModule = () => import('../about/about.module').then(m => m.AboutModule);
const bookModule = () => import('../book/book.module').then(m => m.BookModule);
const issueBookModule = () => import('../issue-book/issue-book.module').then(m => m.IssueBookModule);
const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);

const routes: Routes = [
  {  path: '', component: HomeComponent,
    children: [
      { path: 'about', loadChildren: aboutModule},
      { path: 'listAllBooks',loadChildren: listAllBooksModule},
      { path: 'listAvailBooks',loadChildren: listAvailBooksModule},
      { path: 'addBook',loadChildren: addBookModule},
      { path: 'updateBook',loadChildren: updateBookModule},
      { path: 'returnBook',loadChildren: returnIssuedBookModule},
      { path: 'issuedBook',loadChildren: listIssuedBooksModule},
      { path: 'contact',loadChildren: contactModule},
      { path: 'manageStudent',loadChildren: studentModule},
      { path: 'book', loadChildren: bookModule},
      { path: 'issueBook', loadChildren: issueBookModule},
      { path: '', loadChildren: aboutModule},
      { path: '**' ,data: { title: 'Page Not Module' },loadChildren: pageNotFoundModule}
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
