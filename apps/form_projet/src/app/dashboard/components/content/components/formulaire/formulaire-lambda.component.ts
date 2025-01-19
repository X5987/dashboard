import { Component, inject, output, signal } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import { FormGroup } from '@angular/forms';
import { MoviesStore } from '../stores/movies.store';
import { Movie } from '../models';
import { FormulaireLambdaServices } from '../services/formulaire-lambda.services';

@Component({
    selector: 'app-formulaire-lambda',
    imports: [DesignSystemModule],
    templateUrl: './formulaire-lambda.component.html',
    styleUrl: './formulaire-lambda.component.scss'
})
export class FormulaireLambdaComponent {
  store = inject(MoviesStore);
  requestToSave = output<Movie>();
  formService = inject(FormulaireLambdaServices);

  modeUpdate = signal(false);

  form = this.formService.formulaireLambda();

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
