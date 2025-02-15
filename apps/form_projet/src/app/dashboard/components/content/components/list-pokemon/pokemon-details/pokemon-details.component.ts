import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { take, tap } from 'rxjs';
import { Pokemon } from '../../models';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
  imports: [RouterLink, MatToolbar, MatButton, MatChipSet, MatChip, NgIf],
})
export class PokemonDetailsComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  pokemon = signal<Pokemon | null>(null);

  constructor() {
    this.router.data
      .pipe(
        take(1),
        tap((data) => this.pokemon.set(data['pokemon'])),
      )
      .subscribe();
  }
}
