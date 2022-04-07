import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { OrgTabsBodyComponentComponent } from '../org-tabs-body-component/org-tabs-body-component.component';
import { OrgTabsLabelComponentComponent } from '../org-tabs-label-component/org-tabs-label-component.component';

@Component({
    selector: 'org-tabs-item',
    templateUrl: './org-tabs-item-component.component.html',
    styleUrls: ['./org-tabs-item-component.component.css']
})
export class OrgTabsItemComponentComponent implements OnInit {
    @Input()
    label: string;

    @Input()
    isActive: boolean;

    @ContentChild(OrgTabsBodyComponentComponent)
    bodyComponent: OrgTabsBodyComponentComponent;

    @ContentChild(OrgTabsLabelComponentComponent)
    labelComponent: OrgTabsLabelComponentComponent;
    constructor() { }

    ngOnInit(): void {
    }

}
