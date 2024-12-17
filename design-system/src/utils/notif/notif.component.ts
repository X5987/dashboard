import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-notif',
  templateUrl: './notif.component.html',
  styleUrl: './notif.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    NgClass,
    MatIconButton,
    MatIcon,
  ],
})
export class NotifComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  action() {}
}
