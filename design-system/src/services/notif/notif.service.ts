import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotifComponent } from '../../utils/notif/notif.component';

@Injectable({
  providedIn: 'root',
})
export class NotifService {
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  openNotif(data: object, config?: MatSnackBarConfig) {
    const defaultConfig: MatSnackBarConfig = {
      data: data,
      duration: 3000,
    };

    this._snackBar.openFromComponent(NotifComponent, {
      ...defaultConfig,
      ...config,
    });
  }
}
