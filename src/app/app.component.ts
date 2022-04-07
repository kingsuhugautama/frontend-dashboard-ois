import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IAuthenticationResponseModel } from './modules/auth/models/authentication.model';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { NavigationService } from './modules/shared/services/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'DASHBOARD-TEMPLATE';

    @HostListener('window:unload')
    beforeUnloadBrowser(): void {
        if (confirm('Are Sure to Leave Application ?') == true) {
            localStorage.clear();
            sessionStorage.clear();
        };
    }

    constructor(
        private router: Router,
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
        // ... Untuk mensetting Page Title berdasarkan parameter {data} di app-routing.module
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            routeData.data.subscribe((data: any) => {
                localStorage.setItem('PageTitle', data.title);

                this.titleService.setTitle(data.title);

                if (data.title !== 'Sign In Account') {
                    const userData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

                    // ** Uncomment untuk Auto Logout per Role
                    // this.authenticationService.autoLogout(userData.timeOut * 60 * 1000);

                    // ** Uncomment untuk Pembatasan Menu per Role
                    // this.handleMenuResctriction(this.router.url);
                }
            });
        });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }
    }

    prepareRoute(outlet: RouterOutlet): any {
        const routeData = this.getChild(this.activatedRoute);

        // routeData.data.subscribe((data: any) => {
        //     return data.animation;
        // });
    }

    handleMenuResctriction(currentUrl: string): void {
        if (currentUrl !== "Page Not Found") {
            let restrict = this.navigationService.onSetResctrictionMenuBasedOnRole(currentUrl);

            if (restrict) {
                this.router.navigateByUrl('dashboard/page-not-found');
            };
        }
    }

    onAutoLogout(): void {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        if (UserData) {
            this.authenticationService.autoLogout(UserData.timeOut * 60000);
        }
    }

    ngOnDestroy(): void {
        localStorage.clear();
        sessionStorage.clear();
    }
}
