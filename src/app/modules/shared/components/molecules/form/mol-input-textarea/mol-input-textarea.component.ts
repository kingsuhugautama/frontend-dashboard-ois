import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, } from '@angular/forms';

@Component({
    selector: 'mol-input-textarea',
    templateUrl: './mol-input-textarea.component.html',
    styleUrls: ['./mol-input-textarea.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolInputTextareaComponent),
            multi: true,
        },
    ],
})
export class MolInputTextareaComponent implements ControlValueAccessor {

    @Input("FormControlNamed") FormControlNamed: FormControl;

    @Input("FormControlCaption") FormControlCaption: string;

    @Input('IsFormControlInvalid') IsFormControlInvalid: boolean;

    @Input('ValidatorsCaption') ValidatorsCaption: string;

    @Input('inputFieldState') inputFieldState = 'normal';

    constructor() { }
    @HostBinding('attr.id')
    externalId = '';

    @Input()
    set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    @Input('label') label: string;

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

    doTouched($event: any): void {
        this.touched = true;
    }
}
