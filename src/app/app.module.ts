import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalModule} from "ngb-modal";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LibraryInterceptor} from "./interceptor/library.interceptor";
import {ErrorInterceptor} from "./interceptor/error.interceptor";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ModalModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:LibraryInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap
//https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/
//https://www.bezkoder.com/angular-12-jwt-auth/

//npm run start
//http://localhost:4200/

//Tests
//npm run lint
//npm run test
//npm run e2e

// Production
//npm run build


/*npx @angular/cli@14 new library-mgmt*/
/*npm install --save ngb-modal*/
/*npm install bootstrap bootstrap-icons*/

/*
npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
 */
