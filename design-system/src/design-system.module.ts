import { NgModule } from '@angular/core';
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
} from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import {
  InputTextComponent,
  SingleSelectComponent,
} from './components/form-fields';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRow,
  MatChipSet,
} from '@angular/material/chips';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { AppRoutingModule } from '../../apps/form_projet/src/app/app.routes';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggle } from '@angular/material/slide-toggle';

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
  MatFormField,
  MatInput,
  MatHint,
  MatLabel,
  MatError,
  MatGridList,
  MatButton,
  MatGridTile,
  MatSelect,
  MatOption,
  MatIcon,
  MatChipGrid,
  MatChipRow,
  MatAutocomplete,
  FormsModule,
  MatChipInput,
  MatAutocompleteTrigger,
  MatChipSet,
  MatChip,
  DragScrollComponent,
  DragScrollItemDirective,
  MatTabsModule,
  MatTab,
  MatSlideToggle,
];
const commonList = [
  CommonModule,
  AppRoutingModule,
  RouterModule,
  RouterOutlet,
  RouterLink,
  NgIf,
  NgForOf,
  NgTemplateOutlet,
  ReactiveFormsModule,
  MatAnchor,
  AsyncPipe,
];
const microComponents = [InputTextComponent, SingleSelectComponent];
const componentWeb = [HeaderComponent, DialogComponent, FilterTableComponent];

@NgModule({
  declarations: [microComponents],
  imports: [commonList, materialElement, componentWeb],
  exports: [componentWeb, commonList, materialElement, microComponents],
})
export class DesignSystemModule {}
