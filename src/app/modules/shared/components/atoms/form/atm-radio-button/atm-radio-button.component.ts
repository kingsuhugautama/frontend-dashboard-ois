import { HostBinding, Input } from '@angular/core';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'atm-radio-button',
    templateUrl: './atm-radio-button.component.html',
    styleUrls: ['./atm-radio-button.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AtmRadioButtonComponent),
            multi: true
        }
    ]
})
export class AtmRadioButtonComponent implements OnInit, ControlValueAccessor {

    @Input('RadioButtonId') RadioButtonId: string;

    @Input('RadioButtonLabel') RadioButtonLabel: string;

    @Input('RadioButtonChecked') RadioButtonChecked: boolean = false;

    @Input('inputFieldState') inputFieldState = 'normal';

    @HostBinding('attr.id') externalId = '';

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    @Input('value') _value = true;

    private _ID = '';

    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false;
    disabled = false;

    checked = false;

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
