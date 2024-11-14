import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AutoCompleteList, ListSelect } from 'design-system';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FormulService {
  private url: string = 'https://fakestoreapi.com';

  private http: HttpClient = inject(HttpClient);

  getListCountry(): Observable<ListSelect[]> {
    return of([
      {
        libelle: 'France',
        code: 'FR',
      },
      {
        libelle: 'Germany',
        code: 'DE',
      },
      {
        libelle: 'United States',
        code: 'US',
      },
      {
        libelle: 'Canada',
        code: 'CA',
      },
      {
        libelle: 'Australia',
        code: 'AU',
      },
    ]);
  }

  getListBrand(): Observable<AutoCompleteList[]> {
    return of([
      { code: '001', libelle: 'Apple' },
      { code: '002', libelle: 'Samsung' },
      { code: '003', libelle: 'Nike' },
      {
        code: '004',
        libelle: 'Adidas',
      },
      { code: '005', libelle: 'Sony' },
      { code: '006', libelle: 'Microsoft' },
      {
        code: '007',
        libelle: 'Google',
      },
      { code: '008', libelle: 'Amazon' },
      { code: '009', libelle: 'Coca-Cola' },
      {
        code: '010',
        libelle: 'Pepsi',
      },
      { code: '011', libelle: 'Toyota' },
      { code: '012', libelle: 'BMW' },
      {
        code: '013',
        libelle: 'Mercedes-Benz',
      },
      { code: '014', libelle: 'Intel' },
      { code: '015', libelle: 'Facebook' },
      {
        code: '016',
        libelle: 'Instagram',
      },
      { code: '017', libelle: 'Twitter' },
      { code: '018', libelle: 'Snapchat' },
      {
        code: '019',
        libelle: 'Netflix',
      },
      { code: '020', libelle: 'Spotify' },
      { code: '021', libelle: 'Tesla' },
      { code: '022', libelle: 'Uber' },
      {
        code: '023',
        libelle: 'Airbnb',
      },
      { code: '024', libelle: 'LG' },
      { code: '025', libelle: 'Panasonic' },
    ]);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }
}
