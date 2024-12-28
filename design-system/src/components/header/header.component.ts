import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatAnchor, RouterLink],
})
export class HeaderComponent {}
