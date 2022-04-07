import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IAuthenticationResponseModel } from "src/app/modules/auth/models/authentication.model";
import { AuthenticationService } from "src/app/modules/auth/services/authentication.service";

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userData: IAuthenticationResponseModel = this.authenticationService.currentUserValue;

        if (userData) {
            this.router.navigate(['dashboard/beranda']);
            return true;
        }
        return true;
    }
}