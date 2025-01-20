import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PeriodicElement } from '../models/table.interface';
import { User } from '@design-system';
import { FormService } from './form.service';
import { catchError, combineLatest, map, Observable, of } from 'rxjs';

export interface TableData {
  listPeriodic: Observable<PeriodicElement[]>;
  listUsers: Observable<User[]>;
}

@Injectable({
  providedIn: 'root',
})
export class TableDataResolver implements Resolve<TableData> {
  formService: FormService = inject(FormService);

  resolve(): Observable<TableData> {
    const listPeriodic$ = this.formService.getElementPeriodic().pipe(
      catchError((error) => {
        console.error("LA LISTE PERIODIC N'EST PAS RECUPERER", error);
        return of([]);
      }),
    );
    const listUsers$ = this.formService.getAllUsers().pipe(
      catchError((error) => {
        console.error("LA LISTE ALLUSERS N'EST PAS RECUPERER", error);
        return of([]);
      }),
    );
    return combineLatest([listPeriodic$, listUsers$]).pipe(
      map(([listPeriodic, listUsers]) => ({
        listPeriodic: listPeriodic$,
        listUsers: listUsers$,
      })),
    );

    // return forkJoin({
    //   listPeriodic: this.formService.getElementPeriodic().pipe(
    //     catchError((error) => {
    //       console.error('error getElementPeriodic', error);
    //       return [];
    //     }),
    //   ),
    //   listUsers: this.formService.getAllUsers().pipe(
    //     catchError((error) => {
    //       console.error('error getAllUsers', error);
    //       return [];
    //     }),
    //   ),
    // }).pipe(
    //   map((response) => ({
    //     listPeriodic: of(response.listPeriodic),
    //     listUsers: of(response.listUsers),
    //   })),
    // );
  }
}
