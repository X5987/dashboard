import { Component } from '@angular/core';
import { GridComponent, GridStructur, TileTypeEnum } from 'design-system';

@Component({
  selector: 'app-formul',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './formul.component.html',
  styleUrl: './formul.component.scss',
})
export class FormulComponent {
  protected readonly TileTypeEnum = TileTypeEnum;
  tilesForms: GridStructur = {
    grid: {
      cols: 3,
      rowHeight: 100,
    },
    tile: [
      { text: 'form1', cols: 4, rows: 1, color: '#005ecb', border_radius: 10 },
      {
        text: 'form2Result',
        cols: 4,
        rows: 1,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },
      { text: 'form3', cols: 4, rows: 1, color: '#004da4', border_radius: 10 },

      { text: 'form2', cols: 4, rows: 2, color: '#004da4', border_radius: 10 },
      {
        text: 'form1Result',
        cols: 4,
        rows: 2,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },
      {
        text: 'form3Result',
        cols: 4,
        rows: 2,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },
    ],
  };
}
