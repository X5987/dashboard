import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from 'design-system';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DesignSystemModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard_cv';

  constructor() {}
}
