import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { ValueAccessorBase } from '@app/utilities';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent extends ValueAccessorBase<string> {


  // value: string = '';

  get formGroup(): NgForm | FormGroupDirective {
    return this.parent ? this.parent.formDirective as NgForm | FormGroupDirective : null;
  }

  onChange: (value?: any) => void;
  onTouch: (event: any) => void;

  @Input() lbl: string;
  @Input() isDisabled: boolean;
  @Input() controlName: string;
  @Input() minDate: Date = new Date();

  constructor(private parent: ControlContainer) { super(); }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisableState(status: boolean) {
    this.isDisabled = status;
  }

  onTouched(value: any): void {
    if (this.onTouch) {
      this.onTouch(value)
    }
  }

}
