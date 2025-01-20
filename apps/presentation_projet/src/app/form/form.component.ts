import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FilterTableComponent,
  User,
  UserElementHeadTab,
  UserEnum,
} from '@design-system';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { FormService } from './services/form.service';
import {
  PeriodicElement,
  PeriodicElementEnum,
  PeriodicElementHeadTab,
} from './models/table.interface';
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from './services/filter.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSuffix } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [
    PeriodicTableComponent,
    UserTableComponent,
    ToDoListComponent,
    MatTab,
    FilterTableComponent,
    AsyncPipe,
    MatSlideToggle,
    MatSuffix,
    FormsModule,
    MatTabGroup,
  ],
})
export class FormComponent implements OnInit, OnDestroy {
  filterPeriodic_appearance: 'fill' | 'outline' = 'outline';
  filterPeriodic_name: string = 'Filter';
  filterPeriodic_placeholder: string = 'filtre ça pédale';
  filterPeriodic_label: string = 'Filtre periodic';

  filterUser_appearance: 'fill' | 'outline' = 'outline';
  filterUser_name: string = 'Filter';
  filterUser_placeholder: string = 'filtre ça pédale';
  filterUser_label: string = 'Filtre user';

  protected readonly router: ActivatedRoute = inject(ActivatedRoute);
  protected readonly serviceForm: FormService = inject(FormService);
  protected filterService: FilterService = inject(FilterService);
  protected listColumns: string[] = PeriodicElementHeadTab;
  protected listUser: string[] = UserElementHeadTab;

  protected listTable$: Observable<PeriodicElement[]> = new Observable<
    PeriodicElement[]
  >();
  protected listUser$: Observable<User[]> = new Observable<User[]>();
  private unsubscribe$ = new Subject<void>();

  protected checkbox: boolean = false;

  private filterTextSubject = new BehaviorSubject<string>('');
  private filterTextUserSubject = new BehaviorSubject<string>('');
  private toggleStatusSubject = new BehaviorSubject<boolean>(false);

  async ngOnInit() {
    this.router.data.pipe(take(1)).subscribe((data) => {
      if (data) {
        this.listTable$ = data['data'].listPeriodic;
        this.listUser$ = data['data'].listUsers;
      }
    });

    this.listTable$ = this.filterService.filterList(
      this.serviceForm.getElementPeriodic(),
      this.filterTextSubject,
      (item: PeriodicElement, text: string, toggle?: boolean) =>
        (item[PeriodicElementEnum.name]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
          item[PeriodicElementEnum.position]
            .toString()
            .includes(text.toLowerCase()) ||
          item[PeriodicElementEnum.weight]
            .toString()
            .includes(text.toLowerCase()) ||
          item[PeriodicElementEnum.symbol]
            .toLowerCase()
            .includes(text.toLowerCase())) &&
        (!item[PeriodicElementEnum.active]
          ? item.active === toggle
          : item.active),
      this.toggleStatusSubject,
    );

    this.listUser$ = this.filterService.filterList(
      this.serviceForm.getAllUsers(),
      this.filterTextUserSubject,
      (item: User, text: string) =>
        item[UserEnum.username].includes(text.toLowerCase()) ||
        item[UserEnum.password].includes(text.toLowerCase()),
    );
  }

  filterText(filterText: string) {
    this.filterTextSubject.next(filterText);
  }

  filterTextUser(filterText: string) {
    this.filterTextUserSubject.next(filterText);
  }

  toggleStatus(statut: boolean) {
    this.toggleStatusSubject.next(statut);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
