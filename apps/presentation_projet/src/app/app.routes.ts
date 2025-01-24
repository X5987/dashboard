import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TableDataResolver } from './form/services/table-data.resolver';
import { FormulService } from '../../../../src/app/home/services/formul.service';

export const routesPresentationProjet: Routes = [
  {
    path: 'dashboard/presentation',
    loadComponent: () =>
      import('apps/presentation_projet/src/app/form/form.component').then(
        (m) => m.FormComponent,
      ),
    providers: [FormulService],
    resolve: {
      data: TableDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesPresentationProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
