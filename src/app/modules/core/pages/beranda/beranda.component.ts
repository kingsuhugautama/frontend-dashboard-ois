import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css'],
})
export class BerandaComponent implements OnInit {

    // ** User Properites
    UserFullName: string;

    constructor(
        private httpClient: HttpClient,
        private httpOperationService: HttpOperationService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.UserFullName = this.authenticationService.currentUserValue.full_name;

        // this.onCheckDirectPrint();
    }

    onCheckDirectPrint(): void {
        // this.httpClient.get<any>('http://localhost:3000/api/laptop/11')
        //     .subscribe((result) => {
        //         console.log(result);
        //     });

        // this.httpClient.post<any>(
        //     'http://localhost:3000/api/laptop/GetAllLaptopByDynamicFilter',
        //     [
        //         { column: 'id', filter: 'equal', searchText: '1', searchText2: '' },
        //         { column: 'name', filter: 'like', searchText: 'Apple', searchText2: '' },
        //     ]
        // ).subscribe((result) => {
        //     console.log(result);
        // })
    }
}
