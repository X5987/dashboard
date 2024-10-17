import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCssComponent } from './grid-css.component';

describe('GridCssComponent', () => {
  // let component: GridCssComponent;
  let fixture: ComponentFixture<GridCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCssComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridCssComponent);
    fixture.detectChanges();
  });

  it('should gridCss contain libGrid ', () => {
    const compiled = fixture.nativeElement;
    const libGrid = compiled.querySelector('lib-grid');

    expect(libGrid).toBeTruthy();
  });
});
