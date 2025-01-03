import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import { MoviesStore } from '../stores/movies.store';
import { Movie, Movies } from '../models';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [DesignSystemModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  store = inject(MoviesStore);
  listMovies: Observable<Movies> = toObservable(this.store.items);
  @Output() editMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() deleteMovie: EventEmitter<Movie> = new EventEmitter();

  edit(movie: Movie) {
    this.editMovie.emit(movie);
  }

  delete(movie: Movie) {
    this.deleteMovie.emit(movie);
  }
}
