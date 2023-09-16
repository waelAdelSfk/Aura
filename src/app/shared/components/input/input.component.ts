import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

import { ValueAccessorBase } from '@app/utilities';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent extends ValueAccessorBase<string> implements OnInit {

  isPasswordVisible = false;

  get formGroup(): NgForm | FormGroupDirective {
    return this.parent.formDirective as NgForm | FormGroupDirective;
  }

  get control(): AbstractControl<any, any> | null {
    return this.formGroup.form.get(this.formControlName);
  }

  get errorMessage(): string {
    if (this.control && this.control.errors) {
      const errorKeys = Object.keys(this.control.errors);
      for (const errorKey of errorKeys) {
        switch (errorKey) {
          case 'email':
            return 'invalidEmail';
          case 'minlength':
            return 'passwordMinlength';
          case 'mustMatch':
            return 'passwordMismatch';
          case 'emailExists':
            return 'emailAlreadyHaveAccount';
          case 'phoneNumberExists':
            return 'phoneNumberExists';
          default:
            return 'filedRequired';
        }
      }
    }
    return '';
  }

  @Input() type: 'password' | 'text' | 'email' | 'number' = 'text';
  @Input() label: string;
  @Input() isDisabled: boolean;
  @Input() hasEyeIcon: boolean;
  @Input() formControlName: string;

  constructor(private parent: ControlContainer) {
    super();
  }

  ngOnInit(): void {
    if (this.hasEyeIcon) {
      this.type = 'password';
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  toggleShowPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
