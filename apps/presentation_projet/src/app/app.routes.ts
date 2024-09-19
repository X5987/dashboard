import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routesPresentationProjet: Routes = [
  { path: '', component: AppComponent },
  // autres routes
];

@NgModule({
  imports: [RouterModule.forChild(routesPresentationProjet)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
