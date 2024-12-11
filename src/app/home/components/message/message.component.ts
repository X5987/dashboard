import { Component, inject } from '@angular/core';
import {
  DesignSystemModule,
  DialogService,
  NotifService,
} from '@design-system';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [DesignSystemModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  title: string = 'Test Notification';
  readonly dialogService: DialogService = inject(DialogService);
  notifService: NotifService = inject(NotifService);

  showAlert() {
    alert('');
  }

  openDialog() {
    this.dialogService.openDialog();
  }

  showNotif() {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'right',
      data: {
        message: 'Lorem CACA',
        action: 'close',
        classe: 'snackbar-success',
      },
      panelClass: 'snackbar-success',
    };
    this.notifService.openNotif(config.data, config);
  }

  showSuccessNotification() {
    this.notifService.openNotif(
      {
        message: 'Opération réussie!',
        action: 'Fermer',
        classe: 'snackbar-success',
      },
      {
        panelClass: 'snackbar-success',
      },
    );
  }

  showErrorNotification() {
    this.notifService.openNotif(
      {
        message: 'Erreur survenue!',
        action: 'Fermer',
        classe: 'snackbar-error',
      },
      {
        panelClass: 'snackbar-error',
      },
    );
  }

  showWarningNotification() {
    this.notifService.openNotif(
      { message: 'Info !', action: 'Fermer', classe: 'snackbar-info' },
      {
        panelClass: 'snackbar-warning',
        duration: 5000,
      },
    );
  }
}
