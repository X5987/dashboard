import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatButton,
    MatCardTitle,
    MatSelect,
    MatOption,
    MatFormField,
    MatIcon,
  ],
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  pokemonService: PokemonService = inject(PokemonService);

  listPokemon: Observable<Pokemon[]> = this.pokemonService.getListPokemon(10);
  private unsubscribe$ = new Subject<void>();

  list = signal<Pokemon[]>([]);
  listNbrPage = signal<number[] | null>([20, 40, 60, 80, 100, 200]);

  ngOnInit(): void {
    this.listPokemon
      .pipe(
        takeUntil(this.unsubscribe$),
        map((item: Pokemon[]) => this.list.set(item)),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }

  callNewList(nbr: number) {
    debugger;
    this.pokemonService
      .getListPokemon(nbr)
      .pipe(
        takeUntil(this.unsubscribe$),
        map((item: Pokemon[]) => this.list.set(item)),
      )
      .subscribe();
  }
}
