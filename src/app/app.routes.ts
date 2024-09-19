import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'form',
    loadChildren: () =>
      import('./../../apps/form_projet/src/app/app.module').then(
        (m) => m.AppModule,
      ),
  },
  {
    path: 'presentation',
    loadChildren: () =>
      import('./../../apps/presentation_projet/src/app/app.module').then(
        (m) => m.AppModule,
      ),
  },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];
