import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {

  value: string = '';

  get formGroup(): NgForm | FormGroupDirective {
    return this.parent ? this.parent.formDirective as NgForm | FormGroupDirective : null;
  }

  onChange: (value?: any) => void;
  onTouch: (event: any) => void;

  @Input() label: string;
  @Input() isDisabled: boolean;
  @Input() controlName: string;
  @Input() rows = 3;

  constructor(private parent: ControlContainer) { }

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
