import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'org-stepper',
    templateUrl: './org-stepper.component.html',
    styleUrls: ['./org-stepper.component.css']
})
export class OrgStepperComponent implements OnInit {

    @Input('StepperDatasource') StepperDatasource: any[];
    @Input('StepperOrientation') StepperOrientation: string;

    constructor() { }

    ngOnInit(): void {
    }

}
