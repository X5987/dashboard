import { Component } from '@angular/core';
import { SlicePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-slide-football-img',
  standalone: true,
  templateUrl: './slide-football-img.component.html',
  styleUrl: './slide-football-img.component.scss',
  imports: [SlicePipe, UpperCasePipe],
})
export class SlideFootballImgComponent {}
