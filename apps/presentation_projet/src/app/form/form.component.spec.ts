import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a filter component exist', () => {
    const compiled = fixture.nativeElement;
    const filterComponent = compiled.querySelector('lib-filter-table');
    expect(filterComponent).toBeDefined();
  });
  it('should have a table component exist', () => {
    const compiled = fixture.nativeElement;
    const tableComponent = compiled.querySelector('app-table-dynamic');
    expect(tableComponent).toBeDefined();
  });
});
