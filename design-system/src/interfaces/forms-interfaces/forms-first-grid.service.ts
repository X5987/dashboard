import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { inject, Injectable } from '@angular/core';

export interface FormModel {
  country: FormControl<string | null>;
  surname: FormControl<string | null>;
  name: FormControl<string | null>;
  age: FormControl<number | null>;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formBuilder: FormBuilder = inject(FormBuilder);
  createFormGroup(): FormGroup<FormModel> {
    return this.formBuilder.group<FormModel>({
      name: new FormControl<string | null>('', [Validators.required]),
      surname: new FormControl<string | null>(''),
      age: new FormControl<number | null>(0, [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
      ]),
      country: new FormControl<string | null>('', [Validators.required]),
    });
  }
}
