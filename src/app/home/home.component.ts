import { Component } from '@angular/core';
import { DesignSystemModule } from '../../../design-system/src/design-system.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DesignSystemModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
