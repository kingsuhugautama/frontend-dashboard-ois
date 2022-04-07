import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, map, tap } from 'rxjs/operators';
import { MainMenuModel } from '../../../models/navigation/menu.model';
import { RolesModel } from '../../../models/setup-role-menu/setup-role-menu.model';
import { SetupRoleMenuService } from '../../../services/setup-role-menu/setup-role-menu.service';
import { SetupRoleService } from '../../../services/setup-role/setup-role.service';

@Component({
    selector: 'app-input-role',
    templateUrl: './input-role.component.html',
    styleUrls: ['./input-role.component.css']
})
export class InputRoleComponent implements OnInit, AfterViewInit {

    @Input('RolesData') RolesData: RolesModel;

    // ** Main Menu Aktif Properties
    MainMenuAktif: MainMenuModel[];
    SelectedMainMenuAktif: any[] = [];
    SelectedMainMenuAktifIndex: any;

    // ** Main Menu Tidak Aktif Properties
    MainMenuNonAktif: MainMenuModel[];
    SelectedMainMenuNonAktif: any[] = [];
    SelectedMainMenuNonAktifIndex: any;

    constructor(
        private setupRoleService: SetupRoleService,
        private setupRoleMenuService: SetupRoleMenuService) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        if (Object.keys(this.RolesData).length != 0) {
            this.onGetMainMenuAktif(this.RolesData);
            this.onGetMainMenuNonAktif(this.RolesData);
        } else {
            this.setupRoleService.onGetCurrentDataRole()
                .subscribe((result: RolesModel) => {
                    this.RolesData = result;
                    this.onGetMainMenuAktif(this.RolesData);
                    this.onGetMainMenuNonAktif(this.RolesData);
                });
        }
    }

    onGetMainMenuAktif(RoleData: RolesModel) {
        this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
            .subscribe((result) => {
                this.MainMenuAktif = result.data;
            });
    }

    onGetMainMenuNonAktif(RoleData: RolesModel) {
        this.setupRoleMenuService.onGetAllMainMenuNotInRoleByRoleId(RoleData.id_role)
            .subscribe((result) => {
                this.MainMenuNonAktif = result.data;
            });
    }

    onTogglingHideChildMenu(id: any) {
        this.onTogglingIconArrow(id);

        // ** Get element berdasarkan ChildMenu yg dipilih
        let elem = document.getElementById(id + "ChildMenu");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingIconArrow(id: any) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "Icon");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    onTogglingHideSidebarChildMenu(id: any) {
        this.onTogglingSidebarIconArrow(id);

        // ** Get element berdasarkan ChildMenu yg dipilih
        let elem = document.getElementById(id + "SidebarChild");

        // ** Buat variable kondisi
        let conditionHidden = elem.classList.contains("is-hidden");
        let conditionShow = elem.classList.contains("is-show");

        // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
        if (conditionHidden) {
            if (conditionShow) {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-selected");
            } else {
                elem.classList.remove("is-hidden");
                elem.classList.add("is-show");
                elem.classList.add("is-selected");
            };
        };

        // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
        if (!conditionHidden) {
            if (conditionShow) {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-show");
                elem.classList.remove("is-selected");

            } else {
                elem.classList.add("is-hidden");
                elem.classList.remove("is-selected");
            }
        };
    }

    onTogglingSidebarIconArrow(id: any) {
        // ** Get element berdasarkan Icon yg dipilih
        let elem = document.getElementById(id + "SidebarIcon");

        // ** Buat variable kondisi
        let conditionRight = elem.classList.contains("fa-angle-right");
        let conditionDown = elem.classList.contains("fa-angle-down");

        // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
        if (conditionRight && !conditionDown) {
            elem.classList.remove("fa-angle-right");
            elem.classList.add("fa-angle-down");
        };

        if (!conditionRight && conditionDown) {
            elem.classList.remove("fa-angle-down");
            elem.classList.add("fa-angle-right");
        };
    }

    onCheckSelectedMenuNonAktif(MainMenu: any, Index: number): void {

        // ** Get MainMenuId Checkbox Element
        let elem = document.getElementById(MainMenu.id_menu + "Checkbox") as HTMLInputElement;

        // ** Kondisi Ketika di check / di uncheck
        if (elem.checked) {
            this.SelectedMainMenuNonAktif.push(MainMenu);
        } else {
            const index = this.SelectedMainMenuNonAktif.map(e => e.id_menu).indexOf(MainMenu.id_menu);
            this.SelectedMainMenuNonAktif.splice(index, 1);
        }
    }

    onClickAddToMenuAktif() {
        // ** Lakukan Perulangan untuk mengetahui apabila 
        // ** variable this.SelectedMainMenuNonAktif memiliki length >= 1
        this.SelectedMainMenuNonAktif.forEach((item) => {
            // ** Kemudian run function dari Service Setup Role Menu
            this.setupRoleMenuService.onInsertMainMenuToRole(
                this.RolesData.id_role,
                item.id_menu
            ).pipe(
                delay(200),
                tap((result) => {
                    const i = this.SelectedMainMenuNonAktif.map(e => e.id_menu).indexOf(item.id_menu);

                    this.SelectedMainMenuNonAktif.splice(i, 1);
                })
            ).subscribe((result) => {
                this.onGetMainMenuAktif(this.RolesData);

                this.onGetMainMenuNonAktif(this.RolesData);
            });
        });
    }

    onCheckSelectedMenuAktif(MainMenu: any, Index: number): void {
        // ** Get MainMenuId Checkbox Element
        let elem = document.getElementById(MainMenu.id_menu + "Checkbox") as HTMLInputElement;

        // ** Kondisi Ketika di check / di uncheck
        if (elem.checked) {
            this.SelectedMainMenuAktif.push(MainMenu);
        } else {
            const index = this.SelectedMainMenuAktif.map(e => e.id_menu).indexOf(MainMenu.id_menu);
            this.SelectedMainMenuAktif.splice(index, 1);
        }
    }

    onClickRemoveFromMenuAktif() {
        // ** Lakukan Perulangan untuk mengetahui apabila 
        // ** variable this.SelectedMainMenuAktif memiliki length >= 1
        this.SelectedMainMenuAktif.forEach((item) => {
            // ** Kemudian run function dari Service Setup Role Menu
            this.setupRoleMenuService.onRemoveMainMenuFromRole(
                this.RolesData.id_role,
                item.id_menu
            ).pipe(
                delay(200),
                tap((result) => {
                    const i = this.SelectedMainMenuAktif.map(e => e.id_menu).indexOf(item.id_menu);

                    this.SelectedMainMenuAktif.splice(i, 1);
                })
            ).subscribe((result) => {
                this.onGetMainMenuAktif(this.RolesData);

                this.onGetMainMenuNonAktif(this.RolesData);
            });
        });
    }
}
