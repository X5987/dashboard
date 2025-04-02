import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatCardImage } from '@angular/material/card';
import { MovieList } from '../../../comments.component';

export interface MovieDetails {
  listMovies: MovieList[];
  movie: MovieList;
}

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-details.component.html',
  styleUrls: ['movie-details.component.scss'],
  imports: [MatDialogModule, MatButtonModule, MatIcon, MatCardImage],
})
export class MovieDetailsComponent {
  readonly data: MovieDetails = inject<MovieDetails>(MAT_DIALOG_DATA);
  readonly movie: WritableSignal<MovieList> = signal(this.data.movie);
  readonly listMovie: WritableSignal<MovieList[]> = signal(
    this.data.listMovies,
  );

  constructor() {
    console.log(this.movie());
    console.log(this.listMovie());
  }
}
