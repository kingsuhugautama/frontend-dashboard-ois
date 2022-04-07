import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atm-button-warning',
    templateUrl: './button-warning.component.html',
    styleUrls: ['./button-warning.component.css']
})
export class ButtonWarningComponent implements OnInit {

    @Input("button-primary-caption") ButtonCaption: string;
    @Output("onClickButtonWarning") onClickButtonWarning = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onClickedButtonWarning(args: any) {
        this.onClickButtonWarning.emit(args);
    }
}
