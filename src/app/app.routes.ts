import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./../../apps/form_projet/src/app/app.module').then(
        (m) => m.AppModule,
      ),
  },
  {
    path: 'presentation',
    loadChildren: () =>
      import('./../../apps/presentation_projet/src/app/app.module').then(
        (m) => m.AppModule,
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
