import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CdkMenuItem, CdkMenuModule } from '@angular/cdk/menu';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import {
  MatGridList,
  MatGridListModule,
  MatGridTile,
} from '@angular/material/grid-list';
import {
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
} from '@angular/material/menu';
import { AgCharts } from 'ag-charts-angular';

const materialElement = [
  MatButtonModule,
  MatInputModule,
  CdkMenuModule,
  CdkMenuItem,
  MatCardModule,
  MatCardContent,
  MatMenuModule,
  MatMenuTrigger,
  MatMenuItem,
  NgOptimizedImage,
  MatGridListModule,
  MatGridList,
  MatGridTile,
  AgCharts,
];

const componentWeb = [HeaderComponent];

@NgModule({
  declarations: [componentWeb],
  imports: [CommonModule, materialElement],
  exports: [materialElement, componentWeb],
})
export class DesignSystemModule {}
