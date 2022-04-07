import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildMenu, TopMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'mol-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class MolTopMenuComponent implements OnInit {

    ChildMenu: TopMenuModel[];

    @Input("ToggleVisibility") ToggleVisibility: boolean = false;

    @Output("onToggledVisibility") onToggledVisibility = new EventEmitter<any>();

    constructor(private navigationService: NavigationService) {
        this.onGetActiveChildMenu();

        this.onGetHideTopMenuSubject();

        this.navigationService.onGetBackToMainMenu()
            .subscribe((_result) => {
                if (_result === true) {
                    this.ToggleVisibility = _result;

                    let elem = document.getElementById("ArrowVisibilty");

                    if (this.ToggleVisibility == true) {
                        elem.classList.remove("fa-chevron-circle-up");
                        elem.classList.add("fa-chevron-circle-down");
                    };

                    this.onToggledVisibility.emit(_result);
                }
            })
    }

    ngOnInit(): void {
        this.ChildMenu = JSON.parse(localStorage.getItem("ActiveChildMenu"));

        this.onTogglingVisibility();
    }

    onGetActiveChildMenu() {
        this.navigationService.onGetActiveChildMenuSubject()
            .subscribe((_result) => {
                if (this.ToggleVisibility) {
                    this.onTogglingVisibility();
                }

                this.ChildMenu = _result;
            })
    }

    onGetSidebarMenu(ChildMenuId: number) {
        this.navigationService.onFetchSidebarMenuFromSessionStorage(ChildMenuId);
    }

    onTogglingVisibility() {
        this.ToggleVisibility = !this.ToggleVisibility;

        let elem = document.getElementById("ArrowVisibilty");

        if (this.ToggleVisibility == true) {
            elem.classList.remove("fa-chevron-circle-up");
            elem.classList.add("fa-chevron-circle-down");
        } else {
            elem.classList.remove("fa-chevron-circle-down");
            elem.classList.add("fa-chevron-circle-up");
        }

        this.onToggledVisibility.emit(this.ToggleVisibility);
    }

    // ** Method ini digunakan untuk listening State yg dikirim ketika menekan Sidebar Menu Item
    onGetHideTopMenuSubject() {
        this.navigationService.onGetHideTopMenuSubject()
            .subscribe(
                (_result) => {
                    if (_result === true) {
                        this.ToggleVisibility = _result;

                        let elem = document.getElementById("ArrowVisibilty");

                        if (this.ToggleVisibility == true) {
                            elem.classList.remove("fa-chevron-circle-up");
                            elem.classList.add("fa-chevron-circle-down");
                        }

                        this.onToggledVisibility.emit(_result);
                    }
                }, (error) => {
                    console.log(error);
                }, () => {

                })
    }
}
