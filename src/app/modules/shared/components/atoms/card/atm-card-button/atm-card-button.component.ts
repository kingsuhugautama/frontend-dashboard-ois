import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atm-card-button',
    templateUrl: './atm-card-button.component.html',
    styleUrls: ['./atm-card-button.component.css']
})
export class AtmCardButtonComponent implements OnInit {

    @Input("CardButtonClass") CardButtonClass: string;

    @Input("ButtonCaptions") ButtonCaptions: string;

    @Output("onClickedCardButton") onClickedCardButton = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onClickButtonCard(args: any) {
        this.onClickedCardButton.emit(args);
    }
}
