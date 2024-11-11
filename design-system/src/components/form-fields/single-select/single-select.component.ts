import { Component, Input, OnDestroy, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

export interface ListSelect {
  value: string;
  code: string;
}

@Component({
  selector: 'lib-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent implements OnDestroy {
  @Input({ required: true }) appearance: 'fill' | 'outline' = 'outline';
  @Input() readonly = false;
  @Input() disabled = false;
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) list$: Observable<ListSelect[]> = of([]);

  protected _onDestroy = new Subject<void>();
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

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
