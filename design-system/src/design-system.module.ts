import { NgModule } from '@angular/core';
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
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
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card';
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
  MatFormFieldModule,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import {
  InputTextComponent,
  SingleSelectComponent,
  TextareaComponent,
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
import { LoaderDirective } from './directives/loader/loader.directive';
import { MatListModule } from '@angular/material/list';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TruncatePipe } from './services/pipes/truncate.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
  MatDialogModule,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatFormField,
  MatInput,
  MatHint,
  MatLabel,
  MatError,
  MatButton,
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
  MatListModule,
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardTitle,
  MatCell,
  MatTable,
  MatHeaderCell,
  MatSort,
  MatPaginator,
  MatRow,
  MatHeaderRow,
  MatCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatHeaderCellDef,
  MatSortHeader,
  MatColumnDef,
  TruncatePipe,
  MatFormField,
  MatFormFieldModule,
  MatDatepickerModule,
  FormsModule,
  MatNativeDateModule,
  DatePipe,
  MatInput,
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
const microComponents = [
  InputTextComponent,
  SingleSelectComponent,
  TextareaComponent,
];
const componentWeb = [
  HeaderComponent,
  DialogComponent,
  FilterTableComponent,
  LoaderDirective,
];

@NgModule({
  declarations: [microComponents],
  imports: [commonList, materialElement, componentWeb],
  exports: [componentWeb, commonList, materialElement, microComponents],
})
export class DesignSystemModule {}
