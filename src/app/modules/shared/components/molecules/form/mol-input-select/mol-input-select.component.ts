import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, FormControl } from '@angular/forms';

@Component({
    selector: 'mol-input-select',
    templateUrl: './mol-input-select.component.html',
    styleUrls: ['./mol-input-select.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MolInputSelectComponent),
        multi: true,
    }],
})
export class MolInputSelectComponent implements ControlValueAccessor {
    @Input('label') label: string;
    @Input('options') options: [];
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
    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false

    disabled = false

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
        this.value = $event.target.value;
    }

}
