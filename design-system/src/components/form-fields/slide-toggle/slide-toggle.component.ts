import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacySlideToggleChange as MatSlideToggleChange } from '@angular/material/legacy-slide-toggle';

@Component({
  selector: 'bac-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideToggleComponent implements OnInit {
  @Input() form: UntypedFormControl;
  @Input() control: UntypedFormControl;
  @Input() label: string;
  @Input() readonly = false;
  @Output() changeValue: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  switchChange($event: MatSlideToggleChange) {
    this.changeValue.emit($event.checked);
  }

}
