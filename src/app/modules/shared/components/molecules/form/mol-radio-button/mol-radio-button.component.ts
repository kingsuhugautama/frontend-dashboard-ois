import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'mol-radio-button',
    templateUrl: './mol-radio-button.component.html',
    styleUrls: ['./mol-radio-button.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolRadioButtonComponent),
            multi: true
        }
    ]
})
export class MolRadioButtonComponent implements OnInit {

    @Input('RadioButtonObject') RadioButtonObject: object[];
    @Input('label') label: string;

    @HostBinding('attr.id') externalId = '';

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    @Input('value') _value = '';

    private _ID = '';

    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false;
    disabled = false;

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

    get id() { return this._ID; }

    get value() { return this._value; }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }
}
