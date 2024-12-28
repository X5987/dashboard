import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routesFormProjet: Routes = [
  {
    path: 'dashboard-personal',
    loadComponent: () =>
      import('apps/form_projet/src/app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesFormProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
