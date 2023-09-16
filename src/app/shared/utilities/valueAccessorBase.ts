import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessorBase<T> implements ControlValueAccessor {

  protected isAutoBind: boolean;
  protected innerValue: T;

  public changed = new Array<(value: T) => void>();
  public touched = new Array<() => void>();

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.isAutoBind = true;
      this.changed.forEach(f => f(value));
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef | null = null) {}

  touch(): void {
    this.touched.forEach(f => f());
  }

  writeValue(value: T): void {
    this.innerValue = value;
    this.changeDetectorRef?.markForCheck();
  }


  registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.touched.push(fn);
  }

}
