import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaireLambdaComponent } from './formulaire-lambda.component';

describe('FormulaireLambdaComponent', () => {
  let component: FormulaireLambdaComponent;
  let fixture: ComponentFixture<FormulaireLambdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireLambdaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireLambdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
