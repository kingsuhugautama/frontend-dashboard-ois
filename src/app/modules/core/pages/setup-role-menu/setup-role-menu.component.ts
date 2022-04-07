import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { SetupRoleMenuService } from '../../services/setup-role-menu/setup-role-menu.service';
import { SetupRoleService } from '../../services/setup-role/setup-role.service';
import { RolesModel } from '../../models/setup-role-menu/setup-role-menu.model';
import { MainMenuModel } from '../../models/navigation/menu.model';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';

@Component({
    selector: 'app-setup-role-menu',
    templateUrl: './setup-role-menu.component.html',
    styleUrls: ['./setup-role-menu.component.css']
})
export class SetupRoleMenuComponent implements OnInit {

    // ** User data properties
    UserData: IAuthenticationResponseModel;
    RolesData: RolesModel;

    MainMenu: MainMenuModel[];

    TabId: string = 'DataRoleActive';
    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    constructor(
        private setupRoleService: SetupRoleService,
        private setupRoleMenuService: SetupRoleMenuService
    ) { }

    ngOnInit(): void {
        this.UserData = JSON.parse(localStorage.getItem('UserData'));

        this.onGetCurrentDataRole();
    }

    onGetCurrentDataRole(): void {
        this.setupRoleService.onGetCurrentDataRole()
            .subscribe((result: RolesModel) => {
                this.RolesData = result;

                this.onGetMainMenuAktif(this.RolesData);
            });
    }

    onGetMainMenuAktif(RoleData: RolesModel) {
        this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
            .subscribe((result) => {
                this.MainMenu = result.data;
            });
    }

    onGetSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (this.TabId == "DataRoleActive") {
            this.onGetCurrentDataRole();
        }
    }
}
