import {
  Component,
  inject,
  model,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlStatus,
  Validators,
} from '@angular/forms';
import { DesignSystemModule } from '@design-system';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-memorize-calendar',
  standalone: true,
  templateUrl: './memorize-calendar.component.html',
  styleUrl: './memorize-calendar.component.scss',
  imports: [DesignSystemModule],
})
export class MemorizeCalendarComponent {
  selected = model<Date | null>(null);
  private fb: FormBuilder = inject(FormBuilder);

  startDateLearnForm = this.fb.group({
    firstDateLearn: new FormControl(null, {
      nonNullable: false,
      validators: [Validators.required],
    }),
  });

  protected statusComputeButton: Observable<FormControlStatus> =
    this.startDateLearnForm.controls.firstDateLearn.events.pipe(
      map((event) => {
        console.log(event.source.value);
        return event.source.status;
      }),
    );

  protected tabDate: WritableSignal<Date[] | null> = signal(null);

  dateCompute(date: Date | null): void {
    if (date) {
      const tabPlaningTitle: number[] = [1, 7, 1, 6];
      this.tabDate.set(
        tabPlaningTitle.map((intervalDayAndMonth: number, index: number) => {
          const uniqueDate: Date = date;
          index <= 1
            ? uniqueDate.setDate(date.getDate() + intervalDayAndMonth)
            : uniqueDate.setMonth(date.getMonth() + intervalDayAndMonth);
          return new Date(uniqueDate);
        }),
      );
    }
  }

  clear() {
    this.startDateLearnForm.controls.firstDateLearn.setValue(null, {
      emitEvent: false,
    });
    setTimeout(() => {
      this.startDateLearnForm.controls.firstDateLearn.enable();
    });
  }
}
