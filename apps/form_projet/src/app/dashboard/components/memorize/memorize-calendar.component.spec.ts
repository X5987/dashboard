import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemorizeCalendarComponent } from './memorize-calendar.component';

describe('MemorizeCalendarComponent', () => {
  let component: MemorizeCalendarComponent;
  let fixture: ComponentFixture<MemorizeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemorizeCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemorizeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
