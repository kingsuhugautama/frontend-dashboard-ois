import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'org-tabs-body',
    templateUrl: './org-tabs-body-component.component.html',
    styleUrls: ['./org-tabs-body-component.component.css']
})
export class OrgTabsBodyComponentComponent implements OnInit {

    @ViewChild(TemplateRef)
    bodyContent: TemplateRef<any>;
    constructor() { }

    ngOnInit(): void {
    }

}
