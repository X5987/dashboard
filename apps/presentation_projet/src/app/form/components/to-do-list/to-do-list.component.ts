import {
  AfterViewInit,
  Component,
  effect,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ToDoEnumform, TodoForm, ToDoList } from '@design-system';
import { Subject, Subscription } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
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
  MatTableDataSource,
} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { FormService } from '../../services/form.service';
import { TodoService } from '../../services/todo.service';
import { TruncatePipe } from '../../../../../../../design-system/src/services/pipes/truncate.pipe';
import { TodoListStore } from './todo-list-store/todo-list-store';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatTable,
    MatRowDef,
    MatHeaderRowDef,
    MatButtonModule,
    MatPaginator,
    MatSortHeader,
    MatSort,
    MatIcon,
    TruncatePipe,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  providers: [TodoListStore],
})
export class ToDoListComponent implements AfterViewInit, OnDestroy {
  dataSource: MatTableDataSource<ToDoList> = new MatTableDataSource<ToDoList>();
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    ToDoEnumform.id,
    ToDoEnumform.status,
    ToDoEnumform.archiveMessage,
    ToDoEnumform.title,
    ToDoEnumform.message,
    ToDoEnumform.date,
    ToDoEnumform.action,
  ];
  protected pageSize: number[] = [5, 10, 25, 100];
  protected readonly ToDoEnumform = ToDoEnumform;
  protected readonly formatDate: string = 'dd-MM-YYYY';

  readonly service: FormService = inject(FormService);

  store = inject(TodoListStore);

  private subscribe$: Subscription = new Subscription();
  private subscribeDialog$: Subscription = new Subscription();
  private unsubscribe$ = new Subject<void>();
  todoFormService: TodoService = inject(TodoService);
  readonly dialog = inject(MatDialog);
  fb: FormBuilder = inject(FormBuilder);

  todoForm: FormGroup<TodoForm> = this.todoFormService.initializeForm();

  constructor() {
    effect(() => {
      this.dataSource.data = [...this.store.list()];
    });
  }

  ngAfterViewInit() {
    this.dataSource.data = this.store.list();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create(): void {
    const dialogRef = this.todoFormService.dialogManage();
    this.subscribeDialog$ = dialogRef.afterClosed().subscribe((result) => {
      this.store.create(result.data);
      this.todoForm.reset();
    });
  }

  edit(el: ToDoList): void {
    const dialogRef = this.todoFormService.dialogManage(el);
    this.subscribeDialog$ = dialogRef.afterClosed().subscribe((result) => {
      this.store.edit(result.data);
      this.todoForm.reset();
    });
  }

  showLine(element: ToDoList) {
    this.todoFormService.dialogManage(element, true);
  }

  removeLine(el: ToDoList) {
    this.store.delete(el);
  }

  deactiveTodo(el: ToDoList) {
    this.store.deactiv(el[ToDoEnumform.id]);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy() {
    this.subscribeDialog$.unsubscribe();
    this.subscribe$.unsubscribe();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log('Désinscription effectuée');
  }
}
