import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MainMenuModel, TopMenuModel, SidebarMenuModel } from 'src/app/modules/core/models/navigation/menu.model';
import { IAuthenticationResponseModel } from '../../auth/models/authentication.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private history: string[] = [];

    // ** Ini adalah Global State untuk menampung Main Menu yg telah kita pilih
    public MainMenuSubject = new Subject<MainMenuModel>();

    // ** Ini adalah Global State untuk menampung Child / Top Menu yg telah kita pilih
    public ChildTopMenuSubject = new Subject<TopMenuModel>();
    public ActiveChildTopMenuSubject = new Subject<TopMenuModel>();

    // ** Ini adalah Global State untuk menampung Main Menu Title yg telah kita pilih
    public MainMenuTitleSubject = new Subject<string>();

    // ** Ini adalah Global State untuk menampung Sidebar Menu yg telah kita get dari session storage
    public SidebarMenuSubject = new Subject<SidebarMenuModel>();
    public ActiveSidebarMenuSubject = new Subject<SidebarMenuModel>();

    // ** Ini adalah Global State untuk menampung Toggle / Variable BackToMainMenu
    // ** Digunakan di treeview-menu.component.ts dan main-menu.component.ts
    public IsBackToMainMenu = new Subject<boolean>();

    public HideTopMenu = new Subject<boolean>();

    public FieldGridSubject = new BehaviorSubject([]);

    public ButtonSidebarMenuState = new BehaviorSubject<any>(false);

    public Restriction = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });
    }

    // !! ================ Main Menu Subject ======================   
    // ** Ini adalah Method untuk mendapatkan MainMenu dari session storage
    onFetchMainMenuFromSessionStorage(): any {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        const MainMenu = UserData.menuJson.mainMenu;

        localStorage.setItem('MainMenu', JSON.stringify(MainMenu));

        this.MainMenuSubject.next(JSON.parse(localStorage.getItem('MainMenu')));

        return MainMenu;
    }

    onGetMainMenuSubject(): Observable<any> {
        return this.MainMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Child Menu / Top Menu Subject ==========
    // ** Ini adalah Method untuk mendapatkan ChildMenu dari session storage
    onFetchChildMenuFromSessionStorage(ParentId: number): any {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        const TopMenu = UserData.menuJson.topMenu;

        const childMenuById = TopMenu.filter((menu: TopMenuModel) => {
            return menu.id_menu_parent === ParentId;
        });

        localStorage.setItem('ActiveChildMenu', JSON.stringify(childMenuById));

        this.onSetActiveChildMenuSubject(JSON.parse(localStorage.getItem('ActiveChildMenu')));

        return childMenuById;
    }

    onSetActiveChildMenuSubject(ChildMenuById: any): any {
        if (ChildMenuById) {
            this.ActiveChildTopMenuSubject.next(ChildMenuById);
        }
    }

    onGetActiveChildMenuSubject(): Observable<any> {
        return this.ActiveChildTopMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Sidebar Menu Subject ===================
    // ** Ini adalah Method untuk mendapatkan ChildMenu dari session storage
    onFetchSidebarMenuFromSessionStorage(ChildMenuId: number): any {

        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        const sidebarMenu = UserData.menuJson.sidebarMenu;

        const sidebarMenuById = sidebarMenu.filter((item: SidebarMenuModel) => {
            return item.id_top_menu == ChildMenuId;
        });

        sidebarMenuById.push({
            button: [],
            caption: "Beranda",
            fieldgrid: [],
            icon: "fas fa-home",
            id_menu_sidebar: 45,
            id_menu_sidebar_parent: 0,
            id_top_menu: 23,
            is_parent: true,
            url: "beranda",
        });

        localStorage.setItem('ActiveSidebarMenu', JSON.stringify(sidebarMenuById));

        this.onSetActiveSidebarMenuSubject(JSON.parse(localStorage.getItem('ActiveSidebarMenu')));

        return sidebarMenuById;
    }

    onSetActiveSidebarMenuSubject(SidebarMenuById: any): any {
        if (SidebarMenuById) {
            this.ActiveSidebarMenuSubject.next(SidebarMenuById);
        }
    }

    // ** Buat Method (Observable) untuk menset Global State SidebarMenu menjadi Observable agar di Component Parent bisa Subscribe
    onGetActiveSidebarMenuSubject(): Observable<any> {
        return this.ActiveSidebarMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Main Menu Title Subject ================
    // ** Buat Method (Observable) untuk menset Global State SidebarMenu menjadi Observable agar nanti di Component Parent bisa subscribe
    onSetMainMenuTitle(value: string): any {
        localStorage.setItem('ActiveMainMenuTitle', value);

        const ActiveMainMenuTitle = localStorage.getItem('ActiveMainMenuTitle');

        if (ActiveMainMenuTitle) {
            this.MainMenuTitleSubject.next(ActiveMainMenuTitle);
        }
    }

    onGetMainMenuTitle(): Observable<any> {
        return this.MainMenuTitleSubject.asObservable();
    }
    // !! =========================================================


    // !! ============ State Back to Main Menu Subject ============
    onSetBackToMainMenu(value: boolean): any {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        let url = UserData.id_role == 2 || UserData.nama_role == "dokter" ? 'Dokter/beranda' : 'dashboard/beranda';

        this.router.navigateByUrl(url);
        this.IsBackToMainMenu.next(value);
    }

    onGetBackToMainMenu(): Observable<any> {
        return this.IsBackToMainMenu.asObservable();
    }
    // !! =========================================================


    onSetHideTopMenuSubject(value: boolean): any {
        this.HideTopMenu.next(value);
    }

    onGetHideTopMenuSubject(): Observable<any> {
        return this.HideTopMenu.asObservable();
    }

    // ** Digunakan untuk kembali ke Halaman Sebelumnya. Biasa nya digunakan ketika User tiba di Component PageNotFound
    backToPreviousPage(): any {
        window.history.back();
    }

    /** Method Untuk Men set Field Grid Subject value dari component Atm Treeview Menu */
    onSetFieldGridBySidebarMenuId(fieldGrid: any): void {
        fieldGrid.forEach((item: any) => {
            item['visible'] = true;
            item['editType'] = 'defaultEdit';
            item['allowEditing'] = false;
            item['allowSorting'] = true;

            delete Object.assign(item, { ['field']: item['nama_asli_field'] })['nama_asli_field'];

            delete Object.assign(item, { ['headerText']: item['nama_header_text'] })['nama_header_text'];

            delete Object.assign(item, { ['type']: item['tipe_field'] })['tipe_field'];

            delete Object.assign(item, { ['width']: item['width_field'] })['width_field'];
        });

        this.FieldGridSubject.next(fieldGrid);

        const CheckSessionStorage = JSON.parse(localStorage.getItem('ActiveFieldGrid'));

        if (!CheckSessionStorage) {
            localStorage.setItem('ActiveFieldGrid', JSON.stringify(this.FieldGridSubject.getValue()));
        }
    }

    /** Method Untuk Men set Field Grid Subject value dari component Atm Treeview Menu */
    onGetFieldBySidebarMenuId(): Observable<any> {
        const CheckSessionStorage = JSON.parse(localStorage.getItem('ActiveFieldGrid'));

        if (CheckSessionStorage) {
            this.FieldGridSubject.next(CheckSessionStorage);
        }

        return this.FieldGridSubject.asObservable();
    }

    onSetVisibilitySidebarButton(State: boolean): void {
        this.ButtonSidebarMenuState.next(State);
    }

    onSetResctrictionMenuBasedOnRole(currentUrl: string): boolean {
        const UserData: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

        let prefix = UserData.id_role === 2 || UserData.nama_role === 'dokter' ? '' : '/dashboard/';

        const ActiveSidebarMenu: SidebarMenuModel[] = JSON.parse(localStorage.getItem('ActiveSidebarMenu'));

        let restrict: boolean;

        let allSidebarMenu: any[] = [];

        if (ActiveSidebarMenu) {
            ActiveSidebarMenu.forEach((item) => {
                if (item.url === "" && item.sidebarChild) {
                    allSidebarMenu.push(...item.sidebarChild);
                };

                if (item.url !== "") {
                    allSidebarMenu.push(item);
                };
            });

            let check = allSidebarMenu.map((item) => { return `${prefix}${item.url}` }).indexOf(currentUrl);

            restrict = check < 0 ? true : false;

            this.Restriction.next(restrict);

            return restrict;
        }
    }
}
