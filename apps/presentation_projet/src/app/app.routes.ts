import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TableDataResolver } from './form/services/table-data.resolver';
import { FormulService } from '../../../../src/app/home/services/formul.service';
import { TodoListStore } from './form/components/to-do-list/todo-list-store/todo-list-store';
import { AuthGuard } from '../../../../src/app/core/auth/auth.guard';

export const routesPresentationProjet: Routes = [
  {
    path: 'presentation',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('apps/presentation_projet/src/app/form/form.component').then(
        (m) => m.FormComponent,
      ),
    providers: [TodoListStore, FormulService],
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
