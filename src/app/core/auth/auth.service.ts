import { Injectable, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  readonly #isLoggedIn = signal(false);
  readonly isLoggedIn = this.#isLoggedIn.asReadonly();

  login(name: string, password: string): Observable<boolean> {
    const isLoggednIn: boolean =
      name.trim() === 'admin' && password.trim() === 'admin';
    this.#isLoggedIn.set(isLoggednIn);
    return of(isLoggednIn).pipe(delay(3000));
  }
}
