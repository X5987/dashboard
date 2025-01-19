import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  map,
  Observable,
  startWith,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { DesignSystemModule } from '@design-system';
import { Communes } from '../../models/commune.interface';

@Component({
  selector: 'app-analyse',
  imports: [CommonModule, DesignSystemModule],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.scss',
})
export class AnalyseComponent implements OnInit, OnDestroy {
  dashboardServices: DashboardService = inject(DashboardService);

  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;

  communeDefaut: string = 'paris';

  frappeAuxClavier$: BehaviorSubject<string> = new BehaviorSubject(
    this.communeDefaut,
  );
  result$: Observable<Communes[]> = new Observable();
  unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.frappeAuxClavier$
      .asObservable()
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(500),
        startWith(this.communeDefaut),
        map((text: string): string => text),
        distinctUntilChanged(),
        exhaustMap(
          (csc: string) =>
            (this.result$ = this.dashboardServices.getCommune(csc)),
        ),
        tap((res) => console.log('res', res)),
      )
      .subscribe();
  }

  learn($event: Event) {
    const text = $event.target as HTMLInputElement;
    this.frappeAuxClavier$.next(text.value);
  }

  ngOnDestroy() {
    this.frappeAuxClavier$.unsubscribe();
    this.unsubscribe$.unsubscribe();
  }
}
