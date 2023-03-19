import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('ErrorInterceptor This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('ErrorInterceptor This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            /*this.router.navigate(['/error']).then(r => {
              console.log('Navigate to Error component');
            });*/
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
