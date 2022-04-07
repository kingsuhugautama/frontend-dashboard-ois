import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(
        private router: Router,
        public navigationService: NavigationService
    ) { }

    ngOnInit(): void {
    }

    onClickButtonKembali(args: any) {
        let type = args.type;

        if (type == "click") {
            this.router.navigateByUrl('dashboard/beranda');
        }
    }

    onClickButtonKembaliBeranda(args: any) {
        let type = args.type;

        if (type == "click") {
            this.router.navigateByUrl('dashboard/beranda');
        }
    }
}
