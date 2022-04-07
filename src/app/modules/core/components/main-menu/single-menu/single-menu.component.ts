import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
    selector: 'atm-single-menu',
    templateUrl: './single-menu.component.html',
    styleUrls: ['./single-menu.component.css']
})
export class AtmSingleMenuComponent implements OnInit {

    @Input('IdMenu') IdMenu: string;
    @Input('IconMenu') IconMenu: string;
    @Input('NamaMenu') NamaMenu: string;

    @Output('handleClickedSingleMenu') handleClickedSingleMenu = new EventEmitter<any>();

    UserData: IAuthenticationResponseModel;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.UserData = this.authenticationService.currentUserValue;
    }

    handleClickSingleMenu() {
        const menu = {
            IdMenu: this.IdMenu,
            IconMenu: this.IconMenu,
            NamaMenu: this.NamaMenu
        }

        this.handleClickedSingleMenu.emit(menu);
    }
}
