import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TableDynamicComponent } from './components/table-dynamic.component';
import { DesignSystemModule } from 'design-system';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { FormService } from './services/form.service';
import {
  PeriodicElement,
  PeriodicElementEnum,
  PeriodicElementHeadTab,
} from './models/table.interface';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [DesignSystemModule, TableDynamicComponent, MatSlideToggle],
})
export class FormComponent implements OnInit, OnDestroy {
  appearance: 'fill' | 'outline' = 'outline';
  name: string = 'filter';
  placeholder: string = 'filtre ça pédale';
  label: string = 'filtre table';
  protected serviceForm: FormService = inject(FormService);
  protected listColumns: string[] = PeriodicElementHeadTab;
  protected listTable: Observable<PeriodicElement[]> =
    this.serviceForm.getElementPeriodic();
  protected checkbox: boolean = false;
  protected textSave: string = '';
  private unsubscribe$ = new Subject<void>();

  private filterTextSubject = new BehaviorSubject<string>('');
  private toggleStatusSubject = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.listTable = combineLatest([
      this.serviceForm.getElementPeriodic(),
      this.filterTextSubject,
      this.toggleStatusSubject,
    ]).pipe(
      takeUntil(this.unsubscribe$),
      debounceTime(500),
      distinctUntilChanged(),
      map(([list, text, toggle]) => {
        return list.filter(
          (line: PeriodicElement) =>
            (line[PeriodicElementEnum.name]
              .toString()
              .toLowerCase()
              .includes(text.toLowerCase()) ||
              line[PeriodicElementEnum.symbol]
                .toString()
                .toLowerCase()
                .includes(text.toLowerCase()) ||
              line[PeriodicElementEnum.weight]
                .toString()
                .includes(text.toLowerCase()) ||
              line[PeriodicElementEnum.position]
                .toString()
                .includes(text.toLowerCase())) &&
            line[PeriodicElementEnum.active] === toggle,
        );
      }),
    );
  }

  filterText(filterText: string) {
    this.filterTextSubject.next(filterText);
  }

  toggleStatus(statut: boolean) {
    this.toggleStatusSubject.next(statut);
  }

  /**
   * A corriger car le filtre active n'est pas conforme au resultat retourner **/
  // filterText(filterText: string) {
  //   this.textSave = filterText;
  //   const text =
  //     this.textSave !== '' ? this.textSave : filterText.toLowerCase();
  //   const statut: boolean = this.checkbox;
  //   this.listTable = this.serviceForm.getElementPeriodic().pipe(
  //     takeUntil(this.unsubscribe$),
  //     debounceTime(800),
  //     distinctUntilChanged(),
  //     map((list: PeriodicElement[]) => {
  //       return list.filter(
  //         (item: PeriodicElement) =>
  //           (item[PeriodicElementEnum.name].toLowerCase().includes(text) ||
  //             item[PeriodicElementEnum.symbol].toLowerCase().includes(text) ||
  //             item[PeriodicElementEnum.weight].toString().includes(text) ||
  //             item[PeriodicElementEnum.position].toString().includes(text)) &&
  //           item[PeriodicElementEnum.active] === statut,
  //       );
  //     }),
  //     tap((item) => console.log(item)),
  //   );
  // }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
