import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DesignSystemModule, CommonModule, RouterModule, AppRoutingModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'form_projet';

  calendarFocus$: BehaviorSubject<string> = new BehaviorSubject('');

  ngOnInit() {}

  ngOnDestroy(): void {}
}
