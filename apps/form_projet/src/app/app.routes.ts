import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routesDashboardPersonal } from './dashboard/dashboard.routes';
import { MoviesStore } from './dashboard/components/content/components/stores/movies.store';

export const routesFormProjet: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'personal',
  },
  {
    providers: [MoviesStore],
    path: 'personal',
    loadComponent: () =>
      import('apps/form_projet/src/app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
    children: [...routesDashboardPersonal],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesFormProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
