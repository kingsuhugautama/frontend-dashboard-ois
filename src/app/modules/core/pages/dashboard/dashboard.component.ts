import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { Socket } from 'ngx-socket-io';
import { filter, map, take } from 'rxjs/operators';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { MolTopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    // ** Header Ribbon
    HeaderRibbon: string;
    HideHeaderRibbon: boolean = false;

    // ** Sidebar Collapse State
    SidebarCollapse: boolean = true;
    SidebarMenuTitle: string;
    SidebarMenuDatasource: any[] = [];

    @ViewChild('TopMenuComponent') TopMenuComponent: MolTopMenuComponent;
    ToggleTopMenu: boolean = false;
    DashboardDokterState: boolean = false;

    constructor(
        private router: Router,
        // private socket: Socket,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private notificationService: NotificationService,
    ) {
        this.onCheckIsSidebarEmpty();
    }

    ngOnInit(): void {
        // this.onGetNotification();
    }

    onClickNavbarBrand(args: any): void {
        const type = args.type;

        this.SidebarCollapse = type === 'click' ? !this.SidebarCollapse : !this.SidebarCollapse;
    }

    // ** Ketika component Dashboard memuat component Baru
    // ** Misal ketika beralih dari Halaman Beranda ke Halaman About
    // ** Maka Dashboard Component memuat component About sebagai component Baru
    componentAdded(args: any): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const routeData = this.getChild(this.activatedRoute);

            // ** Header Ribbon Hide ketika di halaman Beranda
            routeData.data.subscribe((data: any) => {
                this.HeaderRibbon = data.title;

                if (data.title === 'Beranda') {
                    this.HideHeaderRibbon = true;
                } else {
                    this.HideHeaderRibbon = false;
                }
            });

            // ** Hide Top Menu ketika di module Dashboard Dokter
            routeData.parent.data
                .pipe(take(1))
                .subscribe((parent: any) => {
                    const dashboardDokter = ["Dashboard Dokter", "Pemeriksaan Radiologi Pasien", "Pemeriksaan Laboratorium Pasien"];

                    if (dashboardDokter.includes(parent.title)) {
                        this.DashboardDokterState = true;
                    } else {
                        this.DashboardDokterState = false;
                    }
                });
        })
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }

    onCollapseSidebar(): void {
        this.SidebarCollapse = true;
        this.ToggleTopMenu = true;
    }

    onGetNotification(): any {
        // return this.socket.fromEvent('notification')
        //     .pipe(
        //         map((notify: any) => {
        //             return notify.data;
        //         })
        //     ).subscribe((_result) => {
        //         let header = 'Pemberitahuan Baru';
        //         let body = _result.Message;

        //         this.notificationService.onShowToast(header, body, { className: 'bg-primary text-light', delay: 10000 });
        //     });
    }

    onCheckIsSidebarEmpty(): void {
        this.navigationService.onGetActiveSidebarMenuSubject()
            .subscribe((result: any) => {
                if (!this.DashboardDokterState) {
                    setTimeout(() => {
                        this.SidebarCollapse = false;
                    }, 250);
                }
            });
    }

    onClickBackToMainMenu(args: any): void {
        // console.log(args);
    }

    onTogglingTopMenu(args: any): void {
        const sidebarSection = document.getElementById('sidebar-section');

        args === true ? sidebarSection.classList.add('hidding-top-menu') : sidebarSection.classList.remove('hidding-top-menu');
    }

    ngOnDestroy(): void {
    }
}
