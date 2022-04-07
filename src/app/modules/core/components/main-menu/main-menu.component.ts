import { Component, OnInit } from '@angular/core';
import { MainMenuModel, TopMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'mol-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css']
})
export class MolMainMenuComponent implements OnInit {

    // ** Variable untuk menampung MainMenu
    MainMenu: MainMenuModel[] = [];

    // ** Variable untuk Kondisi menampilkan MainMenu atau tidak
    ShowMainMenu: boolean = true;

    // ** Variable untuk menampung SidebarMenu
    ChildMenu: TopMenuModel[];

    constructor(private navigationService: NavigationService) {
        this.onGetMainMenuSubject();
        this.onGetBackToMainMenuState();
    }

    ngOnInit(): void {
        this.navigationService.onFetchMainMenuFromSessionStorage();
    }

    onGetMainMenuSubject(): void {
        this.navigationService.onGetMainMenuSubject()
            .subscribe((result) => {
                this.MainMenu = result;
            });
    }

    onGetBackToMainMenuState(): void {
        this.navigationService.onGetBackToMainMenu()
            .subscribe((result) => {
                if (result === true) {
                    // ** Set Value Show Main Menu menjadi true
                    this.ShowMainMenu = true;

                    // this.navigationService.onSetBackToMainMenu(false);
                }
            });
    }

    onClickMenu(MenuId: number, MenuTitle: string): void {
        this.navigationService.onFetchChildMenuFromSessionStorage(MenuId);
        this.navigationService.onSetMainMenuTitle(MenuTitle);
    }

    onClickChildMenu(ChildMenuId: number): void {
        this.navigationService.onFetchSidebarMenuFromSessionStorage(ChildMenuId);

        // this.navigationService.onSetActiveSidebarMenu(ChildMenuId);
    }
}
