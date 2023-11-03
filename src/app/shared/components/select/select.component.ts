import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { CommonUtility } from '@app/utilities';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent extends CommonUtility implements ControlValueAccessor {

  value: string;
  onChange: (value?: any) => void;
  onTouch: (event: any) => void;
  @Input() data: Array<unknown>;
  @Input() isMultiple = false;
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() id = 'id';
  @Input() display = 'name';
  @Input() displayed = this.isArabic ? 'nameAr' : 'nameEn';
  @Input() controlName: string;
  @Input() isHexaCode = false;
  @Input() set disabled(val: boolean) {
    const control = this.formGroup.form.get(this.controlName);
    if (control) {
      if (val) {
        control.disable();
      } else {
        control.enable();
      }
    }
  }

  constructor(private parent: ControlContainer) {
    super();
  }

  get formGroup(): NgForm | FormGroupDirective {
    return this.parent ? this.parent.formDirective as NgForm | FormGroupDirective : null;
  }

  get list(): FormControl {
    return this.formGroup.form.get(this.controlName) as FormControl;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
