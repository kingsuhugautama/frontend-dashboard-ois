import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atm-button-primary',
    templateUrl: './atm-button-primary.component.html',
    styleUrls: ['./atm-button-primary.component.css']
})
export class AtmButtonPrimaryComponent implements OnInit {

    @Input("IsButtonBlock") IsButtonBlock: boolean;
    @Input("IsButtonDisabled") IsButtonDisabled: boolean;
    @Input("ButtonPrimaryIcon") ButtonPrimaryIcon: string;
    @Input("ButtonPrimaryCaption") ButtonPrimaryCaption: string;
    @Output("onClickButtonPrimary") onClickButtonPrimary = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onClickedButtonPrimary(args: any) {
        this.onClickButtonPrimary.emit(args);
    }
}
