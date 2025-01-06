import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routesDashboardPersonal: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/content/content.component').then(
        (m) => m.ContentComponent,
      ),
  },
  {
    path: 'dashboard-personal',
    loadComponent: () =>
      import('./components/content/content.component').then(
        (m) => m.ContentComponent,
      ),
  },
  {
    path: 'content',
    loadComponent: () =>
      import('./components/content/content.component').then(
        (m) => m.ContentComponent,
      ),
  },
  {
    path: 'analyse',
    loadComponent: () =>
      import('./components/analyse/analyse.component').then(
        (m) => m.AnalyseComponent,
      ),
  },
  {
    path: 'comments',
    loadComponent: () =>
      import('./components/ comments/comments.component').then(
        (m) => m.CommentsComponent,
      ),
  },
  {
    path: 'memorizing',
    loadComponent: () =>
      import('././components/memorize/memorize-calendar.component').then(
        (m) => m.MemorizeCalendarComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesDashboardPersonal)],
  exports: [RouterModule],
})
export class DashboardRoutes {}
