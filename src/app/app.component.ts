import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DesignSystemModule } from '../../design-system/src/lib/design-system.module';
import { AppModule } from '../../apps/form_projet/src/app/app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesignSystemModule, AppModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard_cv';

  constructor() {}

  methodProlongationLettre() {}
}
