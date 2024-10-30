import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAutocompleteTextComponent } from './input-autocomplete-text.component';

describe('InputAutocompleteTextComponent', () => {
  let component: InputAutocompleteTextComponent;
  let fixture: ComponentFixture<InputAutocompleteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAutocompleteTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAutocompleteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
