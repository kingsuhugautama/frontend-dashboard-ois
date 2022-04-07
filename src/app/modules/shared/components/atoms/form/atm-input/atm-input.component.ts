import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'atm-input',
    templateUrl: './atm-input.component.html',
    styleUrls: ['./atm-input.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AtmInputComponent),
        multi: true,
    }]
})
export class AtmInputComponent implements ControlValueAccessor {

    constructor() { }

    // !! Gunakan State untuk mengatur state detail, normal, ataupun edit
    @Input('inputFieldState') inputFieldState = 'normal';

    @Input('isFooter') isFooter;


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

    // disabled = false;

    @Input('disabled') disabled = false;

    @Input('type') type = "text";

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
            console.log('touched');

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

    // switch() {
    //   this.value = !this.value;
    // }
}
