import { Component, forwardRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'mol-datepicker-syncfusion',
    templateUrl: './mol-datepicker-syncfusion.component.html',
    styleUrls: ['./mol-datepicker-syncfusion.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolDatepickerSyncfusionComponent),
            multi: true
        }
    ]
})
export class MolDatepickerSyncfusionComponent implements OnInit {

    @Input("label") label: string;
    @Input("min") min: Date;
    @Input("max") max: Date;
    @Input("format") format: string;
    @Input("inputFieldState") inputFieldState:string = 'normal';

    @ViewChild("MolDatepicker") MolDatepicker: DatePickerComponent;

    @HostBinding('attr.id') externalId: string = "";

    private _ID: string = "";

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    get id() {
        return this._ID;
    }

    @Input('value') _value: Date = new Date();

    onChange: any = () => { };

    onTouched: any = () => { };

    touched: boolean = false;

    disabled: boolean = false;

    get value() {
        return this._value;
    }

    set value(val: Date) {
        this._value = val;
        this.onChange(val);
        this.onTouched();

        if (val != undefined)
            this.MolDatepicker.value = val;
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
            this.MolDatepicker.value = value;
    }

    doChange(args: any) {
        this.value = args.value;

        if (args.value != undefined)
            this.MolDatepicker.value = args.value;
    }
}
