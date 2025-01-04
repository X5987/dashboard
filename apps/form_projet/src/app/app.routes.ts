import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routesDashboardPersonal } from './dashboard/dashboard.routes';

export const routesFormProjet: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard-personal',
  },
  {
    path: 'dashboard-personal',
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
