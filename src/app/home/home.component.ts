import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FormulComponent } from './components/formul/formul.component';
import { MessageComponent } from './components/message/message.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridCssComponent } from './components/grid/grid-css.component';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from 'design-system';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    HttpClientModule,
    DesignSystemModule,
    SliderComponent,
    ChartsComponent,
    FormulComponent,
    MessageComponent,
    FooterComponent,
    GridCssComponent,
  ],
  providers: [],
})
export class HomeComponent {}
