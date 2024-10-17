import { Component, Input } from '@angular/core';
import { DesignSystemModule } from '../../design-system.module';
import { NgTemplateOutlet } from '@angular/common';
import { Tile } from '../../interfaces';

@Component({
  selector: 'lib-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  imports: [DesignSystemModule, NgTemplateOutlet],
})
export class GridComponent {
  @Input() tiles: Tile[] = []; // Valeur par défaut
}
