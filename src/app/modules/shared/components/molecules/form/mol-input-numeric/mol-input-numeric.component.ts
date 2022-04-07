import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'mol-input-numeric',
    templateUrl: './mol-input-numeric.component.html',
    styleUrls: ['./mol-input-numeric.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolInputNumericComponent),
            multi: true,
        },
    ],
})

export class MolInputNumericComponent implements ControlValueAccessor {

    @Input('FormControlNamed') FormControlNamed: FormControl;

    @Input('FormControlCaption') FormControlCaption: string;

    condition = true;

    @Input('templateForm') templateForm: string = 'LEFTRIGHT';

    @HostBinding('attr.id') externalId = '';

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    @Input('label') label: string;

    @Input('IsFormControlTouched') IsFormControlTouched: boolean;

    @Input('IsFormControlInvalid') IsFormControlInvalid: boolean;

    @Input('ValidatorsCaption') ValidatorsCaption: string;

    @Input('value') _value = '';

    @Input('inputFieldState') inputFieldState = 'normal';

    @Input('isFooter') isFooter = false;

    @Input('format') format: string = 'N2';

    constructor() { }

    OnInit(): void {
        if (this.templateForm === 'LEFTRIGHT') {
            this.condition = true;
        } else {
            this.condition = false;
        }
    }

    get id() { return this._ID; }

    private _ID = '';

    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false;

    // disabled = false;
    @Input('disabled') disabled = false;

    get value() { return this._value; }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
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

    writeValue(value): void {
        // if (value) {
        this.value = value;
        // }
    }

    doChange($event): void {
        this.value = $event.value;
    }

    doTouched($event: any): void {
        this.touched = true;
    }

}
