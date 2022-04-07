import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ButtonNavModel {
    Id: string;
    Icons1: string;
    Icons2?: string;
    Class?:string;
    StackIcon?: boolean;
    Children?: Object[];
    Captions: string;
}

@Component({
    selector: 'mol-button-nav',
    templateUrl: './mol-button-nav.component.html',
    styleUrls: ['./mol-button-nav.component.css']
})
export class MolButtonNavComponent implements OnInit {

    @Input("buttons") buttons: ButtonNavModel[];

    @Output("onClickButtonNav") onClickButtonNav = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onClickedButtonNav(ButtonId: string) {
        this.onClickButtonNav.emit(ButtonId);
    }
}
