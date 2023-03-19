import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryInterceptor implements HttpInterceptor {

  constructor() {}

  //intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   // return next.handle(request);
  //}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
      //headers: new HttpHeaders({
      //  Authorization: 'Basic ' + btoa(username + ':' + password)
      //})
    });
    console.log('Intercepted HTTP call', authReq);
    return next.handle(authReq);
  }
}
/*
export class HttpResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
  }
}*/
