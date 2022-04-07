import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'mol-offcanvas-single-filter',
    templateUrl: './mol-offcanvas-single-filter.component.html',
    styleUrls: ['./mol-offcanvas-single-filter.component.css']
})
export class MolOffcanvasSingleFilterComponent implements OnInit {

    /**
     * @DropdownAdvancedFilter
     * @Keterangan DropdownAdvancedFilter khusus untuk input field Dropdown
    */
    @ViewChild('DropdownAdvancedFilter') DropdownAdvancedFilter: DropDownListComponent;

    @Input('FilterDropdownDatasource') FilterDropdownDatasource: any[] = [];

    @Input('FilterDropdownFields') FilterDropdownFields: any = {};

    @Input('FilterDropdownColumn') FilterDropdownColumn: any;

    @Output('handle-pencarian') HandlingPencarian = new EventEmitter<any>();

    AdvancedFilterArray: any[] = [];

    AdvancedFilterArrayEmitting: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    handleChangeDropdownAdvancedFilter(): void {
        let searchText: any = this.DropdownAdvancedFilter.value;

        this.AdvancedFilterArray = [];

        let items = {
            'columnText': this.FilterDropdownColumn['caption'],
            'columnName': 'like',
            'filter': searchText,
            'searchText': searchText,
        };

        this.AdvancedFilterArray.push(items);

        this.AdvancedFilterArrayEmitting = [];

        let itemsEmit = {
            'columnName': this.FilterDropdownColumn['value'],
            'filter': 'like',
            'searchText': searchText,
            'searchText2': '',
        };

        this.AdvancedFilterArrayEmitting.push(itemsEmit);
    }

    handleDeleteFilterItem(index: number): void {
        this.AdvancedFilterArray.splice(index, 1);
        this.AdvancedFilterArrayEmitting.splice(index, 1);
    }

    handleDeleteItemFromBadge(index: number): void {
        this.AdvancedFilterArray.splice(index, 1);
        this.AdvancedFilterArrayEmitting.splice(index, 1);

        this.handlePencarian();
    }

    handlePencarian(): void {
        this.HandlingPencarian.emit(this.AdvancedFilterArrayEmitting);

        (<HTMLElement>document.getElementById('btnClose')).click();
    }
}
