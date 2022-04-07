import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { AtmTreeviewMenuComponent } from '../sidebar/treeview-menu/atm-treeview-menu.component';

@Component({
    selector: 'atm-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class AtmNavbarComponent implements OnInit {

    UserData: IAuthenticationResponseModel;

    @Output("onClickNavbarBrand") onClickNavbarBrand = new EventEmitter<any>();

    tree: AtmTreeviewMenuComponent;

    constructor(private router: Router,
        private navigationService: NavigationService,
        private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.UserData = this.authenticationService.currentUserValue;
    }

    onClickedNavbarBrand(args: any): void {
        this.onClickNavbarBrand.emit(args);
    }

    onNavigateToChangePassword(): void {
        this.router.navigate(['/dashboard/ganti-password']);

        this.navigationService.onSetHideTopMenuSubject(true);
    }

    onClickButtonLogout(): void {
        return this.authenticationService.onLogout();
    }
}
