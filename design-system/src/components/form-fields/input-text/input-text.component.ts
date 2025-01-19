import { Component, input, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  appearance = input<'fill' | 'outline'>('outline');
  label = input.required<string>();
  placeholder = input.required<string>();
  id = input<string>('');
  type = input<string>('');
  readonly = input<boolean>(false);
  disabled = input<boolean>(false);
  min = input<number>(0);
  max = input<number>(0);
  minlength = input<number>(0);
  maxlength = input<number>(0);
  upperCaseActive = input<boolean>(false);
  specialCharOmit = input<boolean>(false);

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(value: never) {
    if (value) {
      this.control.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: never) => void): void {
    this.control.valueChanges.subscribe((fn) => {});
  }

  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.controlDir.control as FormControl;
  }

  clear() {
    this.control.disable({ emitEvent: false });
    this.control.setValue('', { emitEvent: false });
    setTimeout(() => {
      this.control.enable();
    });
  }
}
