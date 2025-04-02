import { Component, inject, input, output } from '@angular/core';
import { MovieList } from '../../../comments.component';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-video-description',
  imports: [MatIcon],
  templateUrl: './video-description.component.html',
  styleUrl: './video-description.component.scss',
})
export class VideoDescriptionComponent {
  movie = input.required<MovieList>();
  readonly dialog = inject(MatDialog);
  movieDetailShow = output<boolean>();

  detailScreen() {
    this.movieDetailShow.emit(true);
  }
}
