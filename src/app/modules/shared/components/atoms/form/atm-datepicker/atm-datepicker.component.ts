import { Component, forwardRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'atm-datepicker',
    templateUrl: './atm-datepicker.component.html',
    styleUrls: ['./atm-datepicker.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AtmDatepickerComponent),
        multi: true,
    }],
})
export class AtmDatepickerComponent implements ControlValueAccessor {

    constructor() { }

    ngOnInit(): void {
    }


    @HostBinding('attr.id')
    externalId = '';

    @Input()
    set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }


    get id() {
        return this._ID;
    }

    private _ID = '';

    @Input('value') _value = '';
    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false;

    disabled = false;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
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

    writeValue(value) {
        // if (value) {
        this.value = value;
        // }
    }

    doChange($event) {
        this.value = $event.target.value
        // this.onTouched = true
    }

}
