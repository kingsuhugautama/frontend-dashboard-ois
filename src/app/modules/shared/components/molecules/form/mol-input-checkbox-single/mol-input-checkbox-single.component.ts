import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'mol-input-checkbox-single',
  templateUrl: './mol-input-checkbox-single.component.html',
  styleUrls: ['./mol-input-checkbox-single.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MolInputCheckboxSingleComponent),
        multi: true,
    },
],
})
export class MolInputCheckboxSingleComponent implements ControlValueAccessor,OnInit {
    @Input('label') label: string
    onChange: any = () => {};
    onTouch: any = () => {};

    registerOnChange(fn: any):void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any):void {
        this.onTouch = fn;
    }

    constructor(){}

    ngOnInit(){}

    checked:boolean = false;

    writeValue(checked:boolean){
        this.checked = checked;
    }

    onModelChange(e: boolean){
        this.checked = e;

        this.onChange(e);
    }

  

}
