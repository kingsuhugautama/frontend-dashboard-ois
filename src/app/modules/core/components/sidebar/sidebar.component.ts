import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'mol-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class MolSidebarComponent implements OnInit {

    @Input('SidebarCollapse') public SidebarCollapse: boolean = false;
    @Input('IsAdaButtonSidebar') IsAdaButtonSidebar: boolean = false;
    @Input('ButtonSidebarCaption') ButtonSidebarCaption: string;
    @Input('ButtonSidebarIcon') ButtonSidebarIcon: string;
    @Output('handleClickedButtonSidebar') handleClickedButtonSidebar = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButtonSidebar(args: any): void {
        this.handleClickedButtonSidebar.emit(args);
    }
}
