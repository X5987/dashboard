import { Component, Input } from '@angular/core';
import { DesignSystemModule } from '../../design-system.module';
import { NgForOf, NgTemplateOutlet } from '@angular/common';
import { GridStructur, TileTypeEnum } from '../../interfaces';

@Component({
  selector: 'lib-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  imports: [DesignSystemModule, NgTemplateOutlet, NgForOf],
})
export class GridComponent {
  @Input({ required: true }) tileTypes!: TileTypeEnum;
  @Input({ required: true }) grid!: GridStructur;
  protected readonly TileTypeEnum = TileTypeEnum;
}
