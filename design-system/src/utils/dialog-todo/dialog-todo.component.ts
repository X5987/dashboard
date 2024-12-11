import { Component, inject, model, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DesignSystemModule } from '../../design-system.module';
import { FormGroup } from '@angular/forms';
import { TodoDialog, ToDoEnumform, TodoForm } from '../../interfaces';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValueChangesFormService } from '../../services/form-service/value-changes-form.service';

@Component({
  selector: 'lib-dialog-todo',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    DesignSystemModule,
  ],
  templateUrl: './dialog-todo.component.html',
  styleUrl: './dialog-todo.component.scss',
})
export class DialogTodoComponent extends DialogComponent {
  dialogRef = inject(MatDialogRef<DialogComponent>);
  protected readonly ToDoEnumform = ToDoEnumform;

  readonly valueChangesService: ValueChangesFormService = inject(
    ValueChangesFormService,
  );
  readonly data: TodoDialog = inject<TodoDialog>(MAT_DIALOG_DATA);
  protected titleTodo: Signal<string> = model(this.data.title);
  protected inputLabel: Signal<string> = model(this.data.inputLabel);
  protected placeholder: Signal<string> = model(this.data.placeholder);
  protected closeLabel: Signal<string> = model(this.data.close);
  protected readonly: Signal<boolean> = model(this.data.readonly);
  protected save: Signal<string> = model(this.data.save);
  protected messageTitle: Signal<string> = model(this.data.messageTitle);
  protected messagePlaceholder: Signal<string> = model(
    this.data.messagePlaceholder,
  );
  protected formReceived: FormGroup<TodoForm> = this.data.formValue;
  private initialFormValues = this.formReceived.getRawValue();

  get isFormChanged(): Signal<boolean> {
    return this.valueChangesService.valueChangeCheck(
      this.formReceived,
      this.initialFormValues,
    );
  }

  constructor() {
    super();
  }

  sendData() {
    const formData = this.data.formValue.value;
    this.dialogRef.close({ data: formData });
  }
}
