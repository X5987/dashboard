import { Component } from '@angular/core';
import { DesignSystemModule, GridComponent, Tile } from 'design-system';

@Component({
  selector: 'app-grid-css',
  templateUrl: './grid-css.component.html',
  styleUrl: './grid-css.component.scss',
  standalone: true,
  imports: [DesignSystemModule, GridComponent],
})
export class GridCssComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 2, color: '#FFB6C1', border_radius: 10 }, // Light Pink
    { text: 'Two', cols: 1, rows: 4, color: '#ADD8E6', border_radius: 10 }, // Light Blue
    { text: 'Three', cols: 1, rows: 2, color: '#90EE90', border_radius: 10 }, // Light Green
    { text: 'Four', cols: 2, rows: 2, color: '#FFD700', border_radius: 10 }, // Gold
  ];
}
