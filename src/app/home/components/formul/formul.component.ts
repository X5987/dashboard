import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  inject,
  Signal,
  model,
  ElementRef,
  signal,
  Renderer2,
  OnDestroy,
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
  NotifService,
  TileTypeEnum,
  User,
  UserWithoutAdress,
} from '@design-system';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, exhaustMap, map, Observable } from 'rxjs';
import { FormulService } from '../../services/formul.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Todo, TodoComponent } from './components/todo/todo.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-formul',
  standalone: true,
  imports: [
    DesignSystemModule,
    GridComponent,
    AutocompleteComponent,
    TodoComponent,
    MatCheckbox,
  ],
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.scss'],
})
export class FormulComponent implements OnInit, OnDestroy {
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
        color: '#ff7923',
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
        color: '#f5a072',
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

  @ViewChild('formThirdTemplate', { static: true })
  formThirdTemplate!: TemplateRef<never>;

  @ViewChild('formSecondResultTemplate', { static: true })
  formSecondResultTemplate!: TemplateRef<never>;

  @ViewChild('formThirdResultTemplate', { static: true })
  formThirdResultTemplate!: TemplateRef<never>;

  @ViewChild('formFirstResultTemplate', { static: true })
  formFirstResultTemplate!: TemplateRef<never>;

  @ViewChild('autocompleteMarque', { static: false })
  autocompleteMarque!: AutocompleteComponent;

  @ViewChild('appTodo', { static: false })
  appTodo!: TodoComponent;

  serviceList: FormulService = inject(FormulService);
  formService: FormService = inject(FormService);
  renderer: Renderer2 = inject(Renderer2);
  el: ElementRef = inject(ElementRef);
  notifService: NotifService = inject(NotifService);

  formGroupSource: FormGroup<FormModel> = this.formService.createFormGroup();
  formSecondGroupSource: FormGroup<FormSecondModel> =
    this.formService.createSecondFormGroup();
  listCountry$: Observable<ListSelect[]> =
    this.serviceList.getListCountry() as Observable<ListSelect[]>;
  list: Signal<AutoCompleteList[]> = toSignal(this.serviceList.getListBrand(), {
    initialValue: [],
  });

  userWithoutAdress$: Observable<UserWithoutAdress[]> = new Observable<
    UserWithoutAdress[]
  >();

  protected readonly todoPlaceholder: Signal<string> =
    model('Ex: faire ceci...');
  protected readonly todoLabel: Signal<string> = model('Ajouter une todo');
  protected readonly todoButtonName: Signal<string> = model('Ajouter');

  arrayListTodo: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngOnInit(): void {
    if (this.formTemplate) {
      this.tilesForms.tile[0].context = this.formTemplate;
      this.tilesForms.tile[4].context = this.formSecondTemplate;
      this.tilesForms.tile[2].context = this.formThirdTemplate;
      this.tilesForms.tile[5].context = this.formThirdResultTemplate;
    }
    this.userWithoutAdress$ = this.serviceList.getAllUser();

    this.serviceList
      .getListTodo()
      .pipe(map((list: Todo[]) => this.arrayListTodo.next(list)))
      .subscribe();
  }

  sentFirstForm() {
    //  allowed@example.com | test@domain.com
    this.tilesForms.tile[3].context = this.formFirstResultTemplate;
    this.tilesForms.tile[3].data = this.formGroupSource.value;
    this.formGroupSource = this.formService.createFormGroup();
  }

  sentSecondForm() {
    this.tilesForms.tile[1].context = this.formSecondResultTemplate;
    this.tilesForms.tile[1].data = this.formSecondGroupSource.value;
    this.autocompleteMarque.itemsSelected.set([]);
    console.table(this.formSecondGroupSource.controls.marques.value);
    this.formSecondGroupSource.reset();
  }

  changeTodo(todo: Todo) {
    this.tilesForms.tile[2].data = this.formThirdResultTemplate;
    todo.complete = !todo.complete;
  }

  changeTodoText(todo: Todo, index: number) {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('#form-third'),
      'background-color',
      '#fff7ac',
    );
    this.renderer
      .selectRootElement(this.el.nativeElement.querySelector('#inputMessage'))
      .focus();

    this.appTodo.modeEdition = signal(true);
    this.appTodo.todoCurrent.value.id = todo.id;
    this.appTodo.todoCurrent.value.message = todo.message;
  }

  removeTodo(todoCurrent: number) {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      data: {
        message: 'Todo bien éffacé !',
        action: 'close',
        classe: 'snackbar-success',
      },
      panelClass: 'snackbar-success',
    };
    this.loading.next(true);
    const updatedList = this.arrayListTodo.value.filter(
      (todo, index) => index !== todoCurrent,
    );
    this.arrayListTodo.next(updatedList);
    this.notifService.openNotif(config.data, config);
    this.loading.next(false);
  }

  ngOnDestroy() {
    this.loading.unsubscribe();
    this.arrayListTodo.unsubscribe();
  }
}
