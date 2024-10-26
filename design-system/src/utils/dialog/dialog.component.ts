import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() title: string = '';
  @Input() texte: string = '';
  @Input() close: string = 'Close';
  @Input() valide: string = 'Valide';
}
