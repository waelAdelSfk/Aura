import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidationService {

  static maxContentSize(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!(control.value) || !(max)) {
        return null;
      }
      return new Blob([control.value]).size > max ? { maxContentSize : true } : null;
    };
  }
}
