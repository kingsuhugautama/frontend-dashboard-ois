import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'atm-validators',
    templateUrl: './atm-validators.component.html',
    styleUrls: ['./atm-validators.component.css']
})
export class AtmValidatorsComponent implements OnInit {

    @Input('IsFormControlTouched') IsFormControlTouched: boolean;
    @Input('IsFormControlInvalid') IsFormControlInvalid: boolean;
    @Input('IsFormControlRequired') IsFormControlRequired: boolean;
    @Input('ValidatorsCaption') ValidatorsCaption: string;

    constructor() { }

    ngOnInit(): void {

    }

}
