import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAutocompleteChipComponent } from './input-autocomplete-chip.component';

describe('InputAutocompleteChipComponent', () => {
  let component: InputAutocompleteChipComponent;
  let fixture: ComponentFixture<InputAutocompleteChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAutocompleteChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAutocompleteChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
