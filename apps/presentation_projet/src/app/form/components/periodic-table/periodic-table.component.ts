import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import {
  Direction,
  PeriodicElement,
  PeriodicElementEnum,
} from '../../models/table.interface';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DesignSystemModule } from '@design-system';

@Component({
    selector: 'app-periodic-table',
    imports: [DesignSystemModule],
    templateUrl: './periodic-table.component.html',
    styleUrl: './periodic-table.component.scss'
})
export class PeriodicTableComponent
  implements OnChanges, OnDestroy, AfterViewInit
{
  protected readonly PeriodicElementEnum = PeriodicElementEnum;

  @Input({ required: true }) list: Observable<PeriodicElement[]> =
    new Observable<PeriodicElement[]>();
  @Input({ required: true }) displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  dataSubject = new BehaviorSubject<PeriodicElement[]>([]);

  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private subscribe$: Subscription = new Subscription();
  private unsubscribe$ = new Subject<void>();
  protected pageSize: number[] = [5, 10, 25, 100];

  toto: Direction = 'Left';

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['list']) {
      this.subscribe$ = this.list.subscribe(
        (list) => (this.dataSource.data = list),
      );
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
    this.subscribe$.unsubscribe();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('Désinscription effectuée');
  }
}
