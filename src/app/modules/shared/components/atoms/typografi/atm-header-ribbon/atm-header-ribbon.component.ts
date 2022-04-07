import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'atm-header-ribbon',
    templateUrl: './atm-header-ribbon.component.html',
    styleUrls: ['./atm-header-ribbon.component.css']
})
export class AtmHeaderRibbonComponent implements OnInit {

    @Input("HeaderRibbon") HeaderRibbon: string;

    HeaderRibbonSize: string;

    constructor() { }

    ngOnInit(): void {
        let HeaderRibbonParagraph = document.getElementById('HeaderRibbonParagraph') as HTMLElement;

        if (this.HeaderRibbon.length <= 20) {
            HeaderRibbonParagraph.style.fontSize = '17px';
        }

        if (this.HeaderRibbon.length >= 21) {
            HeaderRibbonParagraph.style.fontSize = '16px';
        }
    }

}
