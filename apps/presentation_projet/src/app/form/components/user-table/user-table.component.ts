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
import { Observable, Subject, Subscription } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DesignSystemModule, User, UserEnum } from '@design-system';

@Component({
    selector: 'app-user-table',
    imports: [DesignSystemModule],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnChanges, OnDestroy, AfterViewInit {
  protected readonly UserEnum = UserEnum;

  @Input({ required: true }) list: Observable<User[]> = new Observable<
    User[]
  >();
  @Input({ required: true }) displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<User>([]);
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private subscribe$: Subscription = new Subscription();
  private unsubscribe$ = new Subject<void>();
  protected pageSize: number[] = [5, 10, 25, 100];

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
