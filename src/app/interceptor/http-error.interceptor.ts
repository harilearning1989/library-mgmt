import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginService} from "../services/login/login.service";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else if(error instanceof HttpErrorResponse && error.status === 401){
            alert('Session Expired or Invalid Login Navigating to Login Page')
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.loginService.signout();
          }else{
            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
