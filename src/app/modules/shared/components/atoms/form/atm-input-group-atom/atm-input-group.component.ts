import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'atm-input-group-atom',
    templateUrl: './atm-input-group.component.html',
    styleUrls: ['./atm-input-group.component.css']
})
export class AtmInputGroupComponentAtom implements OnInit {

    @Input('label') label: string;

    @Input('inputId') inputId: string;
    @Input('value') value: any;
    @Input('disableTitle') disableTitle: boolean;
    @Input('disabled') disabled: boolean;
    @Input('button-shortcut') buttonShortcut: string;

    @Output('clickButton') clickButton = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handelClick($event: any) {
        this.clickButton.emit($event);
    }
}
