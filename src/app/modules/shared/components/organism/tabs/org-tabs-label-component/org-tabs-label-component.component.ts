import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'org-tabs-label',
    templateUrl: './org-tabs-label-component.component.html',
    styleUrls: ['./org-tabs-label-component.component.css']
})
export class OrgTabsLabelComponentComponent implements OnInit {

    @ViewChild(TemplateRef)
    labelContent: TemplateRef<any>;

    @Input("Id") Id: string;

    constructor() { }

    ngOnInit(): void {
    }

}
