import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    }
  ]
})
export class TimePickerComponent implements ControlValueAccessor {

  value: string = '';

  get formGroup(): NgForm | FormGroupDirective {
    return this.parent ? this.parent.formDirective as NgForm | FormGroupDirective : null;
  }

  onChange: (value?: any) => void;
  onTouch: (event: any) => void;

  @Input() lbl: string;
  @Input() isDisabled: boolean;
  @Input() controlName: string;

  constructor(private parent: ControlContainer) {
  }

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
