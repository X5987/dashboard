import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  inject,
  Signal,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AutocompleteComponent,
  AutoCompleteList,
  DesignSystemModule,
  FormModel,
  FormSecondModel,
  FormService,
  GridComponent,
  GridStructur,
  ListSelect,
  TileTypeEnum,
} from 'design-system';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormulService } from './services/formul.service';

@Component({
  selector: 'app-formul',
  standalone: true,
  imports: [DesignSystemModule, GridComponent, AutocompleteComponent],
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.scss'],
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

      {
        text: 'form3',
        cols: 4,
        rows: 1,
        color: '#004da4',
        border_radius: 10,
        context: null,
      },
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

  @ViewChild('formSecondTemplate', { static: true })
  formSecondTemplate!: TemplateRef<never>;

  @ViewChild('autocompleteMarque')
  autocompleteMarque!: AutocompleteComponent;

  formService: FormService = inject(FormService);
  formGroupSource: FormGroup<FormModel> = this.formService.createFormGroup();
  formSecondGroupSource: FormGroup<FormSecondModel> =
    this.formService.createSecondFormGroup();
  serviceList: FormulService = inject(FormulService);
  listCountry$: Observable<ListSelect[]> = this.serviceList.getListCountry();
  list: Signal<AutoCompleteList[]> = signal([
    { code: '001', libelle: 'Apple' },
    { code: '002', libelle: 'Samsung' },
    { code: '003', libelle: 'Nike' },
    {
      code: '004',
      libelle: 'Adidas',
    },
    { code: '005', libelle: 'Sony' },
    { code: '006', libelle: 'Microsoft' },
    {
      code: '007',
      libelle: 'Google',
    },
    { code: '008', libelle: 'Amazon' },
    { code: '009', libelle: 'Coca-Cola' },
    {
      code: '010',
      libelle: 'Pepsi',
    },
    { code: '011', libelle: 'Toyota' },
    { code: '012', libelle: 'BMW' },
    {
      code: '013',
      libelle: 'Mercedes-Benz',
    },
    { code: '014', libelle: 'Intel' },
    { code: '015', libelle: 'Facebook' },
    {
      code: '016',
      libelle: 'Instagram',
    },
    { code: '017', libelle: 'Twitter' },
    { code: '018', libelle: 'Snapchat' },
    {
      code: '019',
      libelle: 'Netflix',
    },
    { code: '020', libelle: 'Spotify' },
    { code: '021', libelle: 'Tesla' },
    { code: '022', libelle: 'Uber' },
    {
      code: '023',
      libelle: 'Airbnb',
    },
    { code: '024', libelle: 'LG' },
    { code: '025', libelle: 'Panasonic' },
  ]);

  changeDetec: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    if (this.formTemplate) {
      this.tilesForms.tile[0].context = this.formTemplate;
      this.tilesForms.tile[4].context = this.formSecondTemplate;
    }
  }

  sentFirstForm() {
    console.table(this.formGroupSource.value);
  }

  sentSecondForm() {
    this.autocompleteMarque.itemsSelected.set([]);
    console.table(this.formSecondGroupSource.controls.marques.value);
  }
}
