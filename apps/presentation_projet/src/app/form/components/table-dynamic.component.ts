import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ViewChild,
  inject,
  Input,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatCard, MatCardActions, MatCardHeader } from '@angular/material/card';
import { DesignSystemModule } from 'design-system';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  PeriodicElement,
  PeriodicElementEnum,
} from '../models/table.interface';

@Component({
  selector: 'app-table-dynamic',
  standalone: true,
  imports: [
    DesignSystemModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardHeader,
    MatCard,
    MatCardActions,
  ],
  templateUrl: './table-dynamic.component.html',
  styleUrl: './table-dynamic.component.scss',
})
export class TableDynamicComponent
  implements OnChanges, OnDestroy, AfterViewInit
{
  protected readonly PeriodicElementEnum = PeriodicElementEnum;

  @Input({ required: true }) list: Observable<PeriodicElement[]> =
    new Observable<PeriodicElement[]>();
  @Input({ required: true }) displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private unsubscribe$ = new Subject<void>();
  protected pageSize: number[] = [5, 10, 25, 100];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['list']) {
      this.list
        .pipe(
          takeUntil(this.unsubscribe$),
          switchMap((list: PeriodicElement[]) => (this.dataSource.data = list)),
        )
        .subscribe();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('Désinscription effectuée');
  }
}
