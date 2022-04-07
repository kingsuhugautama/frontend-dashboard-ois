import { Component, forwardRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'mol-dropdown-syncfusion',
    templateUrl: './mol-dropdown-syncfusion.component.html',
    styleUrls: ['./mol-dropdown-syncfusion.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolDropdownSyncfusionComponent),
            multi: true
        }
    ]
})
export class MolDropdownSyncfusionComponent implements OnInit {

    @Input("label") label: string;
    @Input('DataSource') DataSource: any;
    @Input('Fields') Fields: object;
    @Input('AllowFiltering') AllowFiltering: boolean;

    @ViewChild('MolDropdown') MolDropdown: DropDownListComponent;

    @HostBinding('attr.id') externalId: string = "";

    private _ID: string = "";

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    get id() {
        return this._ID;
    }

    @Input('value') _value: any = { "text": '', "value": 0 };

    onChange: any = () => { };

    onTouched: any = () => { };

    touched: boolean = false;

    disabled: boolean = false;

    get value() {
        return this._value;
    }

    set value(val: any) {
        this._value = val;
        this.onChange(val);
        this.onTouched();

        console.log(val);

        if (val != undefined)
            this.MolDropdown.value = val;
    }

    constructor() { }

    ngOnInit(): void {
    }

    registerOnChange(args: any) {
        this.onChange = args;
    }

    registerOnTouched(args: any) {
        this.onTouched = args;
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    writeValue(value: any) {
        this.value = value;

        if (value != undefined)
            this.MolDropdown.value = value;
    }

    doChange(args: any) {
        this.value = args.value;

        if (args.value != undefined)
            this.MolDropdown.value = args.value;
    }
}
