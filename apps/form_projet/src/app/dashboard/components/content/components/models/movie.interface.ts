import { FormControl } from '@angular/forms';

export interface Movie {
  id: number;
  title: string;
  description: string;
}

export interface MovieForm {
  id: FormControl<number | 0>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
}

export type Movies = Movie[];

export interface MoviesState {
  items: Movies;
  loading: boolean;
  empty: boolean;
}

export const initialMovieState: MoviesState = {
  items: [
    {
      id: 0,
      title: 'New Movies',
      description: 'New Movies description',
    },
  ],
  loading: false,
  empty: false,
};
