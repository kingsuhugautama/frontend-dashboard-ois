import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atm-card-header',
    templateUrl: './atm-card-header.component.html',
    styleUrls: ['./atm-card-header.component.css']
})
export class AtmCardHeaderComponent implements OnInit {

    WindowWidth: any;

    @Input("CardHeaderIcon") CardHeaderIcon: string;
    @Input("CardHeaderColor") CardHeaderColor: string;
    @Input("CardHeaderCaption") CardHeaderCaption: string;

    @Output("onCardHeaderToggleClicked") onCardHeaderToggleClicked = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.WindowWidth = window.innerWidth;
    }
}
