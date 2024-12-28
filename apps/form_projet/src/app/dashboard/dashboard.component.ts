import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '@design-system';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DesignSystemModule, MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
