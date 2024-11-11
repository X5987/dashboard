import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListSelect } from 'design-system';

@Injectable({
  providedIn: 'root',
})
export class FormulService {
  getListCountry(): Observable<ListSelect[]> {
    return of([
      {
        value: 'France',
        code: 'FR',
      },
      {
        value: 'Germany',
        code: 'DE',
      },
      {
        value: 'United States',
        code: 'US',
      },
      {
        value: 'Canada',
        code: 'CA',
      },
      {
        value: 'Australia',
        code: 'AU',
      },
    ]);
  }
}
