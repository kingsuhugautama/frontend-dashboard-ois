import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { MainMenu, ChildMenu, SidebarMenu } from 'src/app/modules/core/models/navigation/menu.model';
import { HttpResponseModel } from '../models/Http-Operation/HttpResponseModel';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NavigationFirebaseService {

    private httpHeader: HttpHeaders;

    private history: string[] = [];

    // ** Ini adalah Global State untuk menampung Main Menu yg telah kita pilih
    public MainMenuSubject = new Subject<MainMenu>();

    // ** Ini adalah Global State untuk menampung Child / Top Menu yg telah kita pilih
    public ChildTopMenuSubject = new Subject<ChildMenu>();
    public ActiveChildTopMenuSubject = new Subject<ChildMenu>();

    // ** Ini adalah Global State untuk menampung Main Menu Title yg telah kita pilih
    public MainMenuTitleSubject = new Subject<string>();

    // ** Ini adalah Global State untuk menampung Sidebar Menu yg telah kita get dari local storage
    public SidebarMenuSubject = new Subject<SidebarMenu>();
    public ActiveSidebarMenuSubject = new Subject<SidebarMenu>();

    // ** Ini adalah Global State untuk menampung Toggle / Variable BackToMainMenu
    // ** Digunakan di treeview-menu.component.ts dan main-menu.component.ts
    public IsBackToMainMenu = new Subject<boolean>();

    public HideTopMenu = new Subject<boolean>();

    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });

        this.httpHeader = new HttpHeaders();
        this.httpHeader = this.httpHeader.set('Content-Type', 'application/json');
    }

    defaultGetRequestFromFirebase(url: string): Observable<any> {
        return this.httpClient.get<any>(
            `${environment.firebaseRtdbUrl}` + url,
            {
                headers: this.httpHeader
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                return result;
            })
        );
    }

    // !! ================ Main Menu Subject ======================
    // ** Ini adalah Method untuk mendapatkan MainMenu
    onFetchMenuFromFirebase(): Subscription {
        const mainMenu = localStorage.getItem('MainMenu');

        if (mainMenu) {
            this.MainMenuSubject.next(JSON.parse(mainMenu));
        } else {
            return this.defaultGetRequestFromFirebase('Dashboard/Menu.json')
                .subscribe(
                    (result) => {
                        localStorage.setItem('MainMenu', JSON.stringify(result));
                    }, (error) => {
                        console.log(error);
                    }, () => {
                        this.MainMenuSubject.next(this.onFetchMainMenuFromLocalStorage());
                    }
                );
        }
    }

    // ** Ini adalah Method untuk mendapatkan MainMenu dari local storage
    onFetchMainMenuFromLocalStorage(): any {
        return JSON.parse(localStorage.getItem('MainMenu'));
    }

    onGetMainMenuSubject(): Observable<any> {
        return this.MainMenuSubject.asObservable();
    }
    // !! =========================================================


    // !! ================ Child Menu / Top Menu Subject ==========
    // ** Ini adalah Method untuk mendapatkan ChildMenu
    onFetchChildMenuFromFirebase(): Subscription {
        const childMenu = JSON.parse(localStorage.getItem('ChildMenu'));

        if (childMenu) {
            // ** Do Nothing
        } else {
            return this.defaultGetRequestFromFirebase('Dashboard/ChildMenu.json')
                .subscribe(
                    (result) => {
                        localStorage.setItem('ChildMenu', JSON.stringify(result));
                    }, (error) => {
                        console.log(error);
                    }
                );
        }
    }

    // ** Ini adalah Method untuk mendapatkan ChildMenu dari local storage
    onFetchChildMenuFromLocalStorage(ParentId: number): void {
        const childMenu = JSON.parse(localStorage.getItem('ChildMenu'));

        const childMenuById = childMenu.filter((menu: ChildMenu) => {
            return menu.ParentId === ParentId;
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
    // ** Ini adalah Method untuk mendapatkan SidebarMenu
    onFetchSidebarMenuFromFirebase(): Subscription {
        const sidebarMenu = JSON.parse(localStorage.getItem('SidebarMenu'));

        if (sidebarMenu) {
            // ** Do Nothing!
        } else {
            return this.defaultGetRequestFromFirebase('Dashboard/SidebarMenu.json')
                .subscribe(
                    (result) => {
                        localStorage.setItem('SidebarMenu', JSON.stringify(result));
                    }, (error) => {
                        console.log(error);
                    });
        }
    }

    // ** Ini adalah Method untuk mendapatkan ChildMenu dari local storage
    onFetchSidebarMenuFromLocalStorage(ChildMenuId: number): void {
        const sidebarMenu = JSON.parse(localStorage.getItem('SidebarMenu'));

        const sidebarMenuById = sidebarMenu.filter((item: SidebarMenu) => {
            return item.ChildMenuId === ChildMenuId;
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
        this.router.navigateByUrl('dashboard/beranda');
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
        this.history.pop();

        this.router.navigateByUrl('dashboard/beranda');
    }
}
