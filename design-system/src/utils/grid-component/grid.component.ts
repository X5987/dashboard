import { Component } from '@angular/core';
import { DesignSystemModule } from '../../design-system.module';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'lib-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  imports: [DesignSystemModule],
})
export class GridComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 2, color: '#C7C7C7FF' },
    { text: 'Two', cols: 1, rows: 4, color: '#C7C7C7FF' },
    { text: 'Three', cols: 1, rows: 2, color: '#C7C7C7FF' },
    { text: 'Four', cols: 2, rows: 2, color: '#C7C7C7FF' },
  ];
}
