import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'mol-input-checkbox',
    templateUrl: './mol-input-checkbox.component.html',
    styleUrls: ['./mol-input-checkbox.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolInputCheckboxComponent),
            multi: true
        }
    ]
})
export class MolInputCheckboxComponent implements OnInit {

    @Input('CheckboxObject') CheckboxObject: object[];
    @Input('label') label: string;

    @HostBinding('attr.id') externalId = '';

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    get id() { return this._ID; }

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

    constructor() { }

    ngOnInit(): void {
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    markAsTouched(): void {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    writeValue(value: any): void {
        // if (value) {
        this.value = value;
        // }
    }

    doChange($event: any): void {
        this.value = $event.target.value;
        // this.onTouched = true
    }

    doTouched($event: any): void {
        this.touched = true;
    }
}
