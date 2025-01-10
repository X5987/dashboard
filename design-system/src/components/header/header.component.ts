import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'lib-header',
  template: `<div id="navbar">
    <img
      class="navbar-logo"
      src="https://www.kasandbox.org/programming-images/avatars/leaf-blue.png"
      alt="logo"
    />

    <div class="navbar-item">
      <a mat-button routerLink="home">Accueil</a>
      <a mat-button routerLink="presentation">Présentation</a>
      <a mat-button routerLink="dashboard-personal">Formulaire</a>
      <a mat-flat-button routerLink="contact">Contact</a>

      <div class="toggle-zone">
        <mat-slide-toggle [checked]="checked" [disabled]="disabled">
        </mat-slide-toggle>
      </div>
    </div>
  </div> `,
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
  imports: [MatAnchor, RouterLink, MatSlideToggle],
})
export class HeaderComponent {
  checked = false;
  disabled = false;
}
