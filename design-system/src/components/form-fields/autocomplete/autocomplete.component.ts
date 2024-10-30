import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacySelect as MatSelect } from '@angular/material/legacy-select';
import { takeUntil, take, tap } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import {StringsHelper} from "../../../../core/helpers/string-helper";


@Component({
  selector: 'bac-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() comparFn: (a: { code: string, libelle: string }, b: { code: string, libelle: string }) => boolean;
  @Input() control: UntypedFormControl;
  @Input() isMultiSelect = false;
  @Input() label: string;
  @Input() labelPosition: 'inside' | 'above' = 'above';
  @Input() noEntriesFoundLabel: string;
  @Input() options: { code: string, libelle: string }[];
  @Input() placeholder: string;
  @Input() searchPlaceholder: string;
  @Input() emptySelectLabel: string;
  @ViewChild('select') select: MatSelect;
  filterControl: UntypedFormControl = new UntypedFormControl();
  filter: ReplaySubject<{ code: string, libelle: string }[]> = new ReplaySubject<{ code: string, libelle: string }[]>(1);
  protected _onDestroy = new Subject<void>();
  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.filter.next(this.options.slice());
    this.filterControl.valueChanges.pipe(
      takeUntil(this._onDestroy)
    ).subscribe(() => {
      this.filterFn();
    });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();

    this.select.openedChange.asObservable().pipe(
      tap((opened: boolean) => {
        if (!opened) {
          this.overlayContainer.getContainerElement().classList.remove('select-overlay');
        }
      }),
      takeUntil(this._onDestroy)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filter.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.control.patchValue(val);
        } else {
          this.control.patchValue([]);
        }
      });
  }

  beforeOpen() {
    this.overlayContainer.getContainerElement().classList.add('select-overlay');
  }

  private setInitialValue() {
    this.filter.pipe(
      take(1),
      takeUntil(this._onDestroy)
    ).subscribe(() => {
      this.select.compareWith = this.comparFn;
    });
  }

  private filterFn() {
    if (!this.options) {
      return;
    }
    let search: string = this.filterControl.value;
    if (!search) {
      this.filter.next(this.options.slice());
      return;
    } else {
      search = StringsHelper.cleanUpSpecialCharacter(search);
    }
    const list: { code: string, libelle: string }[] = this.options.filter((m: { code: string, libelle: string }) => {
      return StringsHelper.cleanUpSpecialCharacter(m.libelle).indexOf(search) > -1;
    });
    this.filter.next(list);
  }
}
