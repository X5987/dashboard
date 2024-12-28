import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignSystemModule } from '@design-system';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DesignSystemModule, CommonModule, RouterModule, AppRoutingModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'form_projet';

  calendarFocus$: BehaviorSubject<string> = new BehaviorSubject('');

  ngOnInit() {}

  traite($event: HTMLInputElement) {}

  ngOnDestroy(): void {}
}
