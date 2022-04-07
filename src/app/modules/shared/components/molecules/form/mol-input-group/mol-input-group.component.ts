import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mol-input-group',
    templateUrl: './mol-input-group.component.html',
    styleUrls: ['./mol-input-group.component.css']
})
export class MolInputGroupComponent implements OnInit {

    @Input('label') label: string;
    @Input('titleValue') titleValue: string;
    @Input('inputId') inputId: string;
    @Input('disableTitle') disableTitle: boolean;
    @Input('button-shortcut') buttonShortcut: string;
    @Output('clickButton') clickButton = new EventEmitter<any>();
    @Output('pressEnter') pressEnter = new EventEmitter<any>();

    @Input('divLabelClass') divLabelClass: string = "col-lg-4";
    @Input('divInputClass') divInputClass: string = "col-lg-8";

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButton($event: any) {
        this.clickButton.emit($event)
    }

    onKeypressEvent($event: any) {
        if ($event.charCode == 13) {
            this.pressEnter.emit($event);
        }
    }

}
