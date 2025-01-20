import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  sourceSignal = signal([
    {
      id: 0,
      name: 'Weather',
    },
    {
      id: 1,
      name: 'Joe',
    },
  ]);

  resultLinkedSignal = linkedSignal(() => this.sourceSignal());
  // resultLinkedSignal = computed(() => this.sourceSignal());

  updateSignal(): void {
    this.sourceSignal.set([
      ...this.sourceSignal(),
      {
        id: 2,
        name: 'PEDALE',
      },
      {
        id: 3,
        name: 'CACA',
      },
    ]);
  }

  updateDependentSignal() {
    this.sourceSignal.set([
      ...this.sourceSignal(),
      {
        id: 2,
        name: 'PEDALE',
      },
      {
        id: 3,
        name: 'CACA',
      },
    ]);
  }
}
