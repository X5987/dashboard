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
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { DialogComponent } from './utils/dialog/dialog.component';

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
  MatButtonModule,
  MatDialogModule,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
];

const componentWeb = [HeaderComponent, DialogComponent];

@NgModule({
  declarations: [componentWeb],
  imports: [CommonModule, materialElement],
  exports: [componentWeb, materialElement],
})
export class DesignSystemModule {}
