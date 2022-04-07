import { formatDate } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'mol-offcanvas-filter',
    templateUrl: './mol-offcanvas-filter.component.html',
    styleUrls: ['./mol-offcanvas-filter.component.css']
})
export class MolOffcanvasFilterComponent implements OnInit {

    AdvancedFilterArray: any[] = [];
    AdvancedFilterArrayEmitting: any[] = [];

    FilterState: string = "String";

    /**
     * @FilterColumnDatasource
     * @Keterangan Filter Column Datasource
    */
    @Input('FilterColumnDatasource') FilterColumnDatasource: any[];

    /**
     * @FilterColumnFields
     * @Keterangan Filter Column Fields
    */
    FilterColumnFields: object = { text: 'text', value: 'value' };;

    /**
     * @Column
     * @Keterangan Column Dropdown 
    */
    @ViewChild('Column') Column: DropDownListComponent;

    /**
     * @FilterConditionDatasource
     * @Keterangan Filter Condition Datasource
    */
    FilterConditionDatasource: any[] = [];

    /**
     * @FilterConditionFields
     * @Keterangan Filter Condition Fields
    */
    FilterConditionFields: object = { text: 'text', value: 'value' };

    /**
     * @Condition
     * @Keterangan Condition Dropdown 
    */
    @ViewChild('Condition') Condition: DropDownListComponent;

    /**
     * @Value
     * @Keterangan Value khusus untuk input field string
    */
    @ViewChild('Value') Value: ElementRef;

    /**
     * @DateValue
     * @Keterangan DateValue khusus untuk input field Datepicker
    */
    @ViewChild('DateValue') DateValue: DatePickerComponent;

    /**
     * @DropdownValue
     * @Keterangan DropdownValue khusus untuk input field Dropdown
    */
    @ViewChild('DropdownValue') DropdownValue: DropDownListComponent;

    @Input('FilterDropdownDatasource') FilterDropdownDatasource: any[] = [];

    @Input('FilterDropdownFields') FilterDropdownFields: any = {};

    /**
     * @HandlingPencarian
     * @Keterangan EventEmitter untuk mendapatkan AdvancedFilterArray pada parent Component
    */
    @Output('handle-pencarian') HandlingPencarian = new EventEmitter<any>();

    @Output('handle-change-filter') HandleChangeFilter = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {

    }

    handleChangeFilterColumns(columnText: string): void {
        if (columnText) {
            const is_date_filter = columnText.indexOf('Tgl' || 'tgl') > -1 ? true : false;

            if (is_date_filter) {
                this.FilterState = 'Date';

                this.FilterConditionDatasource = [
                    { text: 'Equal', value: 'between' },
                ];
            };

            const is_dropdown_filter = columnText.indexOf('Pilih') > -1 ? true : false;

            if (is_dropdown_filter) {
                this.FilterState = 'Dropdown';

                this.FilterConditionDatasource = [
                    { text: 'Contains', value: 'like' }
                ];

                this.HandleChangeFilter.emit(columnText);
            };

            if (!is_date_filter && !is_dropdown_filter) {
                this.FilterState = 'String';

                this.FilterConditionDatasource = [
                    // { text: 'Equal', value: 'equal' },
                    { text: 'Contains', value: 'like' },
                ];
            };
        }
    }

    handleClickAddFilter(): void {
        let searchText: any;

        switch (this.FilterState) {
            case "String":
                searchText = this.Value.nativeElement.value;
                break;
            case "Date":
                searchText = formatDate(this.DateValue.value, 'yyyy-MM-dd', 'EN');
                break;
            case "Dropdown":
                searchText = this.DropdownValue.value;
                break;
            default:
                searchText = "";
                break;
        }

        const items = {
            'columnText': this.Column.text,
            'columnName': this.Column.value,
            'filter': this.Condition.value,
            'searchText': searchText,
        };

        this.AdvancedFilterArray.push(items);

        const itemsEmit = {
            'columnName': this.Column.value,
            'filter': this.Condition.value,
            'searchText': searchText,
            'searchText2': this.FilterState == 'Date' ? searchText : "",
        };

        this.AdvancedFilterArrayEmitting.push(itemsEmit);

        setTimeout(() => {
            this.onResetFilter();
        }, 100);
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

    onResetFilter(): void {
        this.Column.value = null;
        this.Condition.value = null;

        switch (this.FilterState) {
            case "String":
                this.Value.nativeElement.value = "";
                break;
            case "Date":
                this.DateValue.value = null;
                break;
            case "Dropdown":
                this.DropdownValue.value = null;
                break;
            default:
                break;
        }
    }

    handlePencarian(): void {
        this.HandlingPencarian.emit(this.AdvancedFilterArrayEmitting);

        (<HTMLElement>document.getElementById('btnClose')).click();
    }
}
