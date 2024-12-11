import { Component } from '@angular/core';
import { DesignSystemModule } from '@design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DesignSystemModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dashboard_cv';
}
