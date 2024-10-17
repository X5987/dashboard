import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from 'design-system';

describe('GridComponent', () => {
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    fixture.detectChanges();
  });

  it('should have a template Name or null on init', () => {
    const compiled = fixture.nativeElement;
    const ngContainer = compiled.querySelector('ng-container');
    const ngTemplateOutlet = ngContainer.querySelector('*ngTemplateOutlet');

    expect(ngContainer).toBeTruthy();
    expect(ngTemplateOutlet).toBeDefined();
    // expect(compiled.templates).toBeDefined();
  });
});
