import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DesignSystemModule } from '../../design-system/src/design-system.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesignSystemModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard_cv';

  constructor() {}

  methodProlongationLettre() {}
}
