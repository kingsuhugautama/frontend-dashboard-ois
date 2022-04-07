import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { environment, webApiDemo, webApiUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const WebApiUrl = httpRequest.url.startsWith(`${webApiDemo}` || `${webApiUrl}`);

        const WebApiLaporan = httpRequest.url.startsWith(`${environment.webApiLaporan}`);

        const IsUserLogin: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        if (!WebApiLaporan && IsUserLogin) {
            const modifiedRequest = httpRequest.clone({
                setHeaders: {
                    Authorization: `Bearer ${IsUserLogin.token}`
                }
            });
            return next.handle(modifiedRequest);
        } else {
            return next.handle(httpRequest);
        }
    }
}
