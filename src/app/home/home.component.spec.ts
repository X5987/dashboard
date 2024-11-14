import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent], // Use imports for standalone component
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the library app-slider', () => {
    const compiled = fixture.nativeElement;
    const appSlider = compiled.querySelector('app-slider');
    expect(appSlider).toBeTruthy();
  });
  it('should have the library app-charts', () => {
    const compiled = fixture.nativeElement;
    const appCharts = compiled.querySelector('app-charts');
    expect(appCharts).toBeTruthy();
  });
  it('should have the library app-formul', () => {
    const compiled = fixture.nativeElement;
    const appFormul = compiled.querySelector('app-formul');
    expect(appFormul).toBeTruthy();
  });
  it('should have the library app-message', () => {
    const compiled = fixture.nativeElement;
    const appMessage = compiled.querySelector('app-message');
    expect(appMessage).toBeTruthy();
  });
  it('should have the library app-grid-css', () => {
    const compiled = fixture.nativeElement;
    const appGridCss = compiled.querySelector('app-grid-css');
    expect(appGridCss).toBeTruthy();
  });
  it('should have the library app-footer', () => {
    const compiled = fixture.nativeElement;
    const appFooter = compiled.querySelector('app-footer');
    expect(appFooter).toBeTruthy();
  });
});
