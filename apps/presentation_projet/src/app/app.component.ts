import { Component } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@Component({
  imports: [
    DesignSystemModule,
    CommonModule,
    AppRoutingModule,
    DesignSystemModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  title = 'presentation_projet';
}
