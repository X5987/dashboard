import { Component } from '@angular/core';
import { DesignSystemModule, Tile } from '@design-system';
import { SlideFootballImgComponent } from './components/slide/slide-football-img.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FormulaireLambdaComponent } from './components/formulaire/formulaire-lambda.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    DesignSystemModule,
    SlideFootballImgComponent,
    WeatherComponent,
    FormulaireLambdaComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  tiles: Tile[] = [
    {
      text: 'slide',
      cols: 2,
      rows: 2,
      context: SlideFootballImgComponent,
    },
    { text: 'weather', cols: 1, rows: 2, context: WeatherComponent },
    { text: 'Three', cols: 1, rows: 3, context: FormulaireLambdaComponent },
    { text: 'Four', cols: 1, rows: 3, context: null },
    { text: 'Four', cols: 1, rows: 3, context: null },
    { text: 'Four', cols: 3, rows: 3, context: null },
  ];
}
