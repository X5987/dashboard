import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';

export const routesPresentationProjet: Routes = [
  { path: '', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesPresentationProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
