import { inject, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../../models';
import { catchError, map, Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsDataResolver implements Resolve<Pokemon | null>, OnDestroy {
  service: PokemonService = inject(PokemonService);
  router: Router = inject(Router);
  private destroy$ = new Subject<void>();

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
    return this.service.getPokemonDetails(route.params['id']).pipe(
      take(1),
      map((item) => item),
      catchError((error) => {
        this.router.navigate(['/content']);
        throw error;
      }),
    );
  }

  ngOnDestroy() {
    console.log('Resolver est bien détruit');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
