import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableDataResolver } from './form/services/table-data.resolver';

export const routesPresentationProjet: Routes = [
  {
    path: '',
    component: FormComponent,
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
