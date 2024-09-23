import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCssComponent } from './grid-css.component';

describe('GridComponent', () => {
  let component: GridCssComponent;
  let fixture: ComponentFixture<GridCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCssComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
