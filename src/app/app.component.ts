import { Component } from '@angular/core';
import { DesignSystemModule } from '@design-system';

@Component({
    selector: 'app-root',
    imports: [DesignSystemModule],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'dashboard_cv';
}
