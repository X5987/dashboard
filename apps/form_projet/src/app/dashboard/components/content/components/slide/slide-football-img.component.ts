import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';

export interface Weather {
  jour: string;
  temperature: number;
  condition: string;
  icon: string;
}
@Component({
  selector: 'app-slide-football-img',
  standalone: true,
  templateUrl: './slide-football-img.component.html',
  styleUrl: './slide-football-img.component.scss',
  imports: [MatIconModule, MatCard, MatCardContent, MatCardFooter, CdkDrag],
})
export class SlideFootballImgComponent {
  currentSlide = 0;
  weatherData: Weather[] = [
    {
      jour: 'Lundi',
      temperature: 20,
      condition: 'Ensoleillé',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Mardi',
      temperature: 18,
      condition: 'Nuageux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Mercredi',
      temperature: 22,
      condition: 'Pluvieux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Jeudi',
      temperature: 19,
      condition: 'Venteux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Vendredi',
      temperature: 21,
      condition: 'Orageux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Samedi',
      temperature: 23,
      condition: 'Ensoleillé',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Dimanche',
      temperature: 17,
      condition: 'Neigeux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Lundi',
      temperature: 15,
      condition: 'Brumeux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Mardi',
      temperature: 16,
      condition: 'Grêle',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Mercredi',
      temperature: 25,
      condition: 'Chaud',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Jeudi',
      temperature: 10,
      condition: 'Froid',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Vendredi',
      temperature: 20,
      condition: 'Partiellement nuageux',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Samedi',
      temperature: 22,
      condition: 'Orage',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
    {
      jour: 'Sunday',
      temperature: 18,
      condition: 'Drizzle',
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    },
  ];

  prevSlide() {
    this.currentSlide =
      this.currentSlide > 0
        ? this.currentSlide - 1
        : this.weatherData.length - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide < this.weatherData.length - 1
        ? this.currentSlide + 1
        : 0;
  }
}
