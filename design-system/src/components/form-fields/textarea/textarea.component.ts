import { Component, Input, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) id: string = '';
  @Input() minlength: number = 0;
  @Input() maxlength: number = 0;
  @Input() appearance: 'fill' | 'outline' = 'outline';

  constructor(@Self() private controlDir: NgControl) {
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
