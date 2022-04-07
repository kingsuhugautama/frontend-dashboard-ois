import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'mol-lock-up-filters',
    templateUrl: './mol-lock-up-filters.component.html',
    styleUrls: ['./mol-lock-up-filters.component.css']
})
export class MolLockUpFiltersComponent implements OnInit {

    @Input('filters') filters: any;

    @Output('onChangeFilters') onChangeFilters = new EventEmitter<any>();

    PreviousCheckbox: any = {};

    constructor() { }

    ngOnInit(): void {
        // console.log(this.filters);
    }

    onFilterChanged(checkbox: any) {
        this.onUncheckPreviousCheckbox(checkbox);

        this.onChangeFilters.emit(checkbox);

        this.PreviousCheckbox = checkbox;
    }

    onUncheckPreviousCheckbox(checkbox: any): void {
        let CurrentCheckbox = checkbox;

        if (Object.keys(this.PreviousCheckbox).length > 0) {
            if (CurrentCheckbox.field !== this.PreviousCheckbox.field) {
                let previous_checkbox_el = document.getElementById(this.PreviousCheckbox.field) as HTMLInputElement;

                previous_checkbox_el.checked = false;
            }
        }
    }
}
