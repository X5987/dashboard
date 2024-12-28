import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ToDoEnumform, TodoForm, ToDoList } from '@design-system';
import { UserTableComponent } from '../user-table/user-table.component';
import { Observable, Subject, Subscription } from 'rxjs';
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
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { FormService } from '../../services/form.service';
import { TodoService } from '../../services/todo.service';
import { TruncatePipe } from '../../../../../../../design-system/src/services/pipes/truncate.pipe';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardContent,
    UserTableComponent,
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
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatPaginator,
    MatSortHeader,
    MatSort,
    MatIcon,
    TruncatePipe,
    MatCardTitleGroup,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent implements AfterViewInit, OnDestroy {
  dataSource: MatTableDataSource<ToDoList> = new MatTableDataSource<ToDoList>();
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
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
  list: Observable<ToDoList[]> = this.service.getElementTodoList();

  private subscribe$: Subscription = new Subscription();
  private subscribeDialog$: Subscription = new Subscription();
  private unsubscribe$ = new Subject<void>();
  todoFormService: TodoService = inject(TodoService);
  readonly dialog = inject(MatDialog);
  fb: FormBuilder = inject(FormBuilder);

  todoForm: FormGroup<TodoForm> = this.todoFormService.initializeForm();

  renderer: Renderer2 = inject(Renderer2);
  el: ElementRef = inject(ElementRef);

  ngAfterViewInit() {
    this.subscribe$ = this.list.subscribe((list: ToDoList[]) => {
      this.dataSource.data = list;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createOrEdit(editElement?: ToDoList): void {
    const dialogRef = this.todoFormService.dialogManage(editElement);
    this.subscribeDialog$ = dialogRef.afterClosed().subscribe((result) => {
      const newElement: ToDoList = result.data;
      if (result) {
        if (editElement) {
          const index = this.dataSource.data.indexOf(editElement);
          if (index !== -1) {
            this.dataSource.data[index] = newElement;
            this.dataSource.data = [...this.dataSource.data];
          }
        } else {
          newElement[ToDoEnumform.status] = true;
          this.dataSource.data = [...this.dataSource.data, newElement];
        }
      }
      this.todoForm.reset();
    });
  }

  showLine(element: ToDoList) {
    this.todoFormService.dialogManage(element, true);
  }

  removeLine(el: ToDoList) {
    const index = this.dataSource.data.indexOf(el);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
    }
  }

  deactiveTodo(el: ToDoList) {
    const index = this.dataSource.data.indexOf(el);
    this.dataSource.data[index][ToDoEnumform.status] = !el[ToDoEnumform.status];
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
