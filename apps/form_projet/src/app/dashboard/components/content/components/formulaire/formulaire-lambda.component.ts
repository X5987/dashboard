import { Component, inject, output } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface Movie {
  id: number;
  title: string;
  description: string;
}

export interface MovieForm {
  id: FormControl<number | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
}

export type Movies = Movie[];

@Component({
  selector: 'app-formulaire-lambda',
  standalone: true,
  imports: [DesignSystemModule],
  templateUrl: './formulaire-lambda.component.html',
  styleUrl: './formulaire-lambda.component.scss',
})
export class FormulaireLambdaComponent {
  requestToSave = output<Movie>();

  formMovie: FormGroup<MovieForm> = inject(FormBuilder).group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  saveToParent(): void {
    this.requestToSave.emit(this.formMovie.value as Movie);
  }
}
