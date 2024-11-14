import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'bac-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() control: UntypedFormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string;
  constructor() { }

  ngOnInit(): void {
  }

  private explainControlErrors(): string {
    return null;
  }

}
