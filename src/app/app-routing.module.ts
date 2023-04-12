import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const loginModule = () => import('./modules/login/login.module').then(x => x.LoginModule);
const registerModule = () => import('./modules/register/register.module').then(m => m.RegisterModule);
const homeModule = () => import('./modules/home/home.module').then(m => m.HomeModule);
const pageNotFoundModule = () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login',data: { title: 'Login Module' },loadChildren: loginModule},
  { path: 'register',data: { title: 'Register Module' },loadChildren: registerModule},
  { path: 'home',data: { title: 'Home Module' },loadChildren: homeModule, canActivate: [AuthGuard]},
  { path: '**' ,data: { title: 'Page Not Module' },loadChildren: pageNotFoundModule}
];

/*
const routes: Routes = [
  { path: 'login',
    data: { title: 'Login Module' },
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home',
    data: { title: 'Home Module' },
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'listAllBooks',
    data: { title: 'List All Books Module' },
    loadChildren: () => import('./modules/list-all-books/list-all-books.module').then(m => m.ListAllBooksModule) },
  { path: 'addBook',
    data: { title: 'Add Book Module' },
    loadChildren: () => import('./modules/add-book/add-book.module').then(m => m.AddBookModule) },
  { path: 'deleteBook',
    data: { title: 'Delete Book Module' },
    loadChildren: () => import('./modules/delete-book/delete-book.module').then(m => m.DeleteBookModule) },
  { path: 'updateBook',
    data: { title: 'Update Book Module' },
    loadChildren: () => import('./modules/update-book/update-book.module').then(m => m.UpdateBookModule) },
  { path: 'returnBook',
    data: { title: 'Return Book Module' },
    loadChildren: () => import('./modules/return-issued-book/return-issued-book.module').then(m => m.ReturnIssuedBookModule) },
  { path: 'listAvailBooks',
    data: { title: 'List Available Books Module' },
    loadChildren: () => import('./modules/list-avail-books/list-avail-books.module').then(m => m.ListAvailBooksModule) },
  { path: 'contact',
    data: { title: 'Contact Module' },
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'about',
    data: { title: 'About Module' },
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: '**' ,
    data: { title: 'Page Not Module' },
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
