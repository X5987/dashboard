import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatAnchor],
})
export class HeaderComponent {}
