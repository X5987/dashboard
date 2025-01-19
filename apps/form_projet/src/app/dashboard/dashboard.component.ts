import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '@design-system';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuSidebarComponent } from './components/menu/menu-sidebar.component';
import { MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
    selector: 'app-dashboard',
    imports: [
        DesignSystemModule,
        CommonModule,
        RouterModule,
        AppRoutingModule,
        DesignSystemModule,
        MatToolbarModule,
        MatToolbar,
        MatSidenavModule,
        MatIconModule,
        MenuSidebarComponent,
        MatIconButton,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { subscriptSizing: 'dynamic' },
        },
    ]
})
export class DashboardComponent {
  collapse: WritableSignal<boolean> = signal(false);
  sidenavWidth: Signal<string> = computed(() =>
    this.collapse() ? '65px' : '250px',
  );
}
