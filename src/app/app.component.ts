import { Component } from '@angular/core';
import { HeaderComponent } from '@design-system';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dashboard_cv';
}
