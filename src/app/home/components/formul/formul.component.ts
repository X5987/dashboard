import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  inject,
  Signal,
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
import { FormulService } from '../../services/formul.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  User,
  UserWithoutAdress,
} from '../../services/interfaces/user.interface';

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
        context: null,
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
        context: null,
      },

      { text: 'form2', cols: 4, rows: 2, color: '#004da4', border_radius: 10 },
      {
        text: 'form3Result',
        cols: 4,
        rows: 2,
        color: '#ffffff',
        border_radius: 10,
        border_color: '2px solid #005ecb',
        context: null,
      },
    ],
  };
  protected readonly TileTypeEnum = TileTypeEnum;
  @ViewChild('formTemplate', { static: true })
  formTemplate!: TemplateRef<never>;

  @ViewChild('formSecondTemplate', { static: true })
  formSecondTemplate!: TemplateRef<never>;

  @ViewChild('formSecondResultTemplate', { static: true })
  formSecondResultTemplate!: TemplateRef<never>;

  @ViewChild('formFirstResultTemplate', { static: true })
  formFirstResultTemplate!: TemplateRef<never>;

  @ViewChild('autocompleteMarque', { static: false })
  autocompleteMarque!: AutocompleteComponent;

  serviceList: FormulService = inject(FormulService);
  formService: FormService = inject(FormService);

  formGroupSource: FormGroup<FormModel> = this.formService.createFormGroup();
  formSecondGroupSource: FormGroup<FormSecondModel> =
    this.formService.createSecondFormGroup();
  listCountry$: Observable<ListSelect[]> =
    this.serviceList.getListCountry() as Observable<ListSelect[]>;
  list: Signal<AutoCompleteList[]> = toSignal(this.serviceList.getListBrand(), {
    initialValue: [],
  });

  // allUser: Observable<User[]> = this.serviceList.getAllUser();
  user$: Observable<User[]> = new Observable<User[]>();
  userWithoutAdress$: Observable<UserWithoutAdress[]> = new Observable<
    UserWithoutAdress[]
  >();

  ngOnInit(): void {
    if (this.formTemplate) {
      this.tilesForms.tile[0].context = this.formTemplate;
      this.tilesForms.tile[4].context = this.formSecondTemplate;
    }
    this.userWithoutAdress$ = this.serviceList.getAllUser();
  }

  sentFirstForm() {
    //  allowed@example.com | test@domain.com
    this.tilesForms.tile[3].context = this.formFirstResultTemplate;
    this.tilesForms.tile[3].data = this.formGroupSource.value;
    this.formGroupSource.reset();
  }

  sentSecondForm() {
    this.tilesForms.tile[1].context = this.formSecondResultTemplate;
    this.tilesForms.tile[1].data = this.formSecondGroupSource.value;
    this.autocompleteMarque.itemsSelected.set([]);
    console.table(this.formSecondGroupSource.controls.marques.value);
    this.formSecondGroupSource.reset();
  }
}
