import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  inject,
} from '@angular/core';
import {
  DesignSystemModule,
  FormModel,
  FormService,
  GridComponent,
  GridStructur,
  ListSelect,
  TileTypeEnum,
} from 'design-system';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-formul',
  standalone: true,
  imports: [DesignSystemModule, GridComponent],
  templateUrl: './formul.component.html',
  styleUrl: './formul.component.scss',
})
export class FormulComponent implements OnInit {
  tilesForms: GridStructur = {
    grid: {
      cols: 3,
      rowHeight: 400,
      gutterSize: 10,
    },
    tile: [
      {
        text: 'form1',
        cols: 4,
        rows: 1,
        color: '#005ecb',
        border_radius: 10,
        context: null,
      },
      {
        text: 'form2Result',
        cols: 4,
        rows: 1,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },

      { text: 'form3', cols: 4, rows: 1, color: '#004da4', border_radius: 10 },
      {
        text: 'form1Result',
        cols: 4,
        rows: 2,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },

      { text: 'form2', cols: 4, rows: 2, color: '#004da4', border_radius: 10 },
      {
        text: 'form3Result',
        cols: 4,
        rows: 2,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
      },
    ],
  };
  protected readonly TileTypeEnum = TileTypeEnum;
  @ViewChild('formTemplate', { static: true })
  formTemplate!: TemplateRef<never>;
  formService: FormService = inject(FormService);
  formGroupSource: FormGroup<FormModel> = this.formService.createFormGroup();
  listCountry: Observable<ListSelect[]> = new Observable();

  listMock(): Observable<ListSelect[]> {
    const countries = [
      { value: 'France', code: 'FR' },
      { value: 'Germany', code: 'DE' },
      { value: 'United States', code: 'US' },
      { value: 'Canada', code: 'CA' },
      { value: 'Australia', code: 'AU' },
    ];
    return of(countries);
  }

  ngOnInit(): void {
    this.listCountry = this.listMock().pipe(
      map((source: ListSelect[]) => {
        return source;
      }),
    );

    this.tilesForms.tile[0].context = this.formTemplate;
  }

  get getCountries(): Observable<ListSelect[]> {
    return this.listMock().pipe(
      map((source: ListSelect[]) => {
        console.log(source);
        // this.listCountry = source;
        return source; // Ensure the observable returns the mapped result
      }),
    );
  }

  sentForm() {
    console.table(this.formGroupSource.value);
  }
}
