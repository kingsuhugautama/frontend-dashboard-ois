import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { IAuthenticationResponseModel } from "src/app/modules/auth/models/authentication.model";
import { AuthenticationService } from "src/app/modules/auth/services/authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private autheticationService: AuthenticationService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userData: IAuthenticationResponseModel = this.autheticationService.currentUserValue;

        if (userData) {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return true;
    }
}