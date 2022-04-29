import { Injectable, Injector } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private router: Router, private authService: AuthService) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

            var authReq = request.clone({
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.authService.getToken()}`
                })
            });


        return next.handle(authReq).pipe(tap(() => { },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error && error.status === 401) {
                        this.router.navigate(['/auth']);
                        return;
                    }

                }
            }));
    }
}
