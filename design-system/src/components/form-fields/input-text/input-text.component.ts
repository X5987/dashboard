import { Component, Input, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() appearance: 'fill' | 'outline' = 'outline';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'email' | 'text' | 'number' = 'text';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() minlength: number = 0;
  @Input() maxlength: number = 0;
  @Input() resetAllowed: boolean = false;
  @Input() upperCaseActive: boolean = false;
  @Input() specialCharOmit: boolean = false;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(value: never) {
    if (value) {
      this.control.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: never) => void): void {
    this.control.valueChanges.subscribe((fn) => {
      console.log('registerOnChange', fn);
    });
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
