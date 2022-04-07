import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'atm-label',
    templateUrl: './atm-label.component.html',
    styleUrls: ['./atm-label.component.css']
})
export class AtmLabelComponent implements OnInit {

    constructor() { }

    @Input('LabelCaption') label: string;

    @Input('LabelFor') labelFor: string;

    @Input('isFooter') isFooter;

    ngOnInit(): void {
    }

}
