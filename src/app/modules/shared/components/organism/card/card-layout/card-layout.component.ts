import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonNavModel } from '../../../molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'org-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.css']
})
export class OrgCardLayoutComponent implements OnInit, AfterContentChecked {

    @Input('HeaderRibbon') HeaderRibbon: string;
    HideHeaderRibbon: string;

    @Input('HeaderRibbonClass') HeaderRibbonClass: string = "col-lg-6 col-md-6 col-sm-6 col-xs-6";

    @Input('ChangeHeaderRibbon') ChangeHeaderRibbon: boolean = false;

    @Input('ButtonNav') ButtonNav: ButtonNavModel[];

    @Input('ButtonNavClass') ButtonNavClass: string = "col-lg-6 col-md-6 col-sm-6 col-xs-6";

    @Output('onClickButtonNav') onClickButtonNav = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        if (!this.ChangeHeaderRibbon) {
            this.HeaderRibbon = localStorage.getItem('PageTitle');
        }
    }

    onClickedButtonNav(ButtonId: string): void {
        this.onClickButtonNav.emit(ButtonId);
    }
}
