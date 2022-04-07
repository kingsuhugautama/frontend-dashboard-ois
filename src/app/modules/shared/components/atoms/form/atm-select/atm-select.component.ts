import { Component, forwardRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'atm-select',
    templateUrl: './atm-select.component.html',
    styleUrls: ['./atm-select.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AtmSelectComponent),
        multi: true,
    }],
})
export class AtmSelectComponent implements ControlValueAccessor {

    constructor() { }


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
    @Input('options') options: [];
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
        this.value = value;
    }

    getValue(obj: any) {
        return obj.value
    }

    getKey(obj: any) {
        return obj.text
    }

    getCaptions(obj: any) {
        return obj.text;
    }

    doChange($event) {
        this.value = $event.target.value
    }

}