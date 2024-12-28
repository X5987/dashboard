import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routesPresentationProjet } from '../../apps/presentation_projet/src/app/app.routes';
import { routesFormProjet } from '../../apps/form_projet/src/app/app.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...routesPresentationProjet,
  ...routesFormProjet,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
