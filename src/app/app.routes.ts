import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routesPresentationProjet } from '../../apps/presentation_projet/src/app/app.routes';
import { routesFormProjet } from '../../apps/form_projet/src/app/app.routes';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    title: 'Login',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Dashboard-accueil',
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ...routesPresentationProjet,
  ...routesFormProjet,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
