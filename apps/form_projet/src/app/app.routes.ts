import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';

export const routesFormProjet: Routes = [
  { path: '', component: FormComponent },
  // autres routes
];

@NgModule({
  imports: [RouterModule.forChild(routesFormProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
