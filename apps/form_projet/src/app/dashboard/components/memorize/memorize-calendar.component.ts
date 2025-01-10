import { Component, inject, model, OnInit } from '@angular/core';
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
export class MemorizeCalendarComponent implements OnInit {
  today = new Date();
  selected = model<Date | null>(null);

  fb: FormBuilder = inject(FormBuilder);

  startDateLearnForm = this.fb.group({
    firstDateLearn: new FormControl(null, [Validators.required]),
  });

  protected statusComputeButton: Observable<FormControlStatus> =
    this.startDateLearnForm.controls.firstDateLearn.events.pipe(
      map((event) => event.source.status),
    );

  ngOnInit(): void {
    this.startDateLearnForm.controls.firstDateLearn.events.subscribe(
      (event) => {
        console.log(event);
      },
    );
  }

  // prendre la date et l'heure entré,
  // lui ajouter un planing de date :
  // C'est-à-dire : date de l'apprentissage → 10min → 1Days → 1week → 1month → 6months
  // ainsi mettre en place un calendrier qui reprendra
  // toutes ces dates et crééra un planing
  returnDateCompute(date: Date | null): Date[] {
    if (!date) return [];
    const tabPlaningTitle: number[] = [1, 7, 1, 6];
    const tabDate: Date[] = tabPlaningTitle.map(
      (value: number, index: number) => {
        const uniqueDate = date;
        index <= 1
          ? uniqueDate.setDate(date.getDate() + value)
          : uniqueDate.setMonth(date.getMonth() + value);
        return uniqueDate;
      },
    );
    console.log('planning dates', tabDate);
    return tabDate;
  }
}
