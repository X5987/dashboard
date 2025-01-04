import { Component, inject, output, signal } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MoviesStore } from '../stores/movies.store';
import { Movie } from '../models';

@Component({
  selector: 'app-formulaire-lambda',
  standalone: true,
  imports: [DesignSystemModule],
  templateUrl: './formulaire-lambda.component.html',
  styleUrl: './formulaire-lambda.component.scss',
})
export class FormulaireLambdaComponent {
  store = inject(MoviesStore);
  requestToSave = output<Movie>();
  formBuilder: FormBuilder = inject(FormBuilder);

  modeUpdate = signal(false);

  form = this.formBuilder.group({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  saveToParent(movie: FormGroup): void {
    this.store.create(movie.value);
    movie.reset();
  }

  editToParent(movie: FormGroup): void {
    this.store.edit(movie.value);
    movie.reset();
    this.modeUpdate.set(false);
  }

  cancelEdit(): void {
    this.form.reset();
    this.modeUpdate.set(false);
  }
}
