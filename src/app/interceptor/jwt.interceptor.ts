import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {LoginService} from "../services/login/login.service";
import {environment} from "../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if (this.loginService.isUserSignedin() && isApiUrl) {
      const user = this.loginService.userValue;
      const isLoggedIn = user && user.token;
      if (isLoggedIn) {
        const request = req.clone({
          headers: new HttpHeaders({
            'Authorization': `HTTP_TOKEN ${user.token}`
          })
        });
        return next.handle(request).pipe(
          catchError(err => {
            if(err instanceof HttpErrorResponse && err.status === 401) {
              this.loginService.signout();
            }
            return throwError(err);
          })
        );
      }
    }
    return next.handle(req);
  }
}
