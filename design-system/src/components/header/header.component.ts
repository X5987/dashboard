import { Component, inject, signal } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SlideToggleComponent } from '../form-fields';

@Component({
  selector: 'lib-header',
  imports: [MatAnchor, RouterLink, SlideToggleComponent, ReactiveFormsModule],
  template: `
    <div id="navbar">
      <div class="navbar-logo">
        <img class="navbar-logo" [src]="avatar()" alt="logo" />
      </div>

      <div class="navbar-item">
        <a mat-button routerLink="home">Accueil</a>
        <a mat-button routerLink="presentation">Présentation</a>
        <a mat-button routerLink="dashboard-personal">Formulaire</a>
        <a mat-flat-button routerLink="contact">Contact</a>

        <div class="toggle-zone">
          <lib-slide-toggle
            [label]="'slide me'"
            [formControl]="toggleForm.controls['slide']"
          ></lib-slide-toggle>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      #navbar {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        flex-wrap: wrap;
        height: 100px;
        justify-content: space-between;
        align-items: center;
      }

      .navbar-logo {
        height: 50px;
        width: 50px;
        margin-left: 20px;
      }

      .navbar-item {
        display: flex;
        flex-direction: row;
        padding-right: 40px;
        align-content: baseline;
        gap: 10px;
        align-items: center;

        > .toggle-zone {
          .mdc-switch__track::after {
          }
        }
      }
    }
  `,
  standalone: true,
})
export class HeaderComponent {
  disabled = false;

  fb = inject(FormBuilder);

  toggleForm = this.fb.group({
    slide: new FormControl(false),
  });

  avatar = signal(
    'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png',
  );
  protected readonly signal = signal;
}
