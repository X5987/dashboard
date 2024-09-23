import { Component } from '@angular/core';
import { DesignSystemModule, GridComponent } from 'design-system';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-css',
  templateUrl: './grid-css.component.html',
  styleUrl: './grid-css.component.scss',
  standalone: true,
  imports: [DesignSystemModule, GridComponent],
})
export class GridCssComponent {}
