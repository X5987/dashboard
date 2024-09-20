import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should have header background color aliceblue', () => {
    const compiled = fixture.nativeElement;
    const navbarElement = compiled.querySelector('#navbar');
    const backgroundColor =
      window.getComputedStyle(navbarElement).backgroundColor;
    console.log(backgroundColor);
    expect(backgroundColor).toBe('aliceblue');
  });

  it('should have a logo with correct attributes', () => {
    const compiled = fixture.nativeElement;
    const logoElement = compiled.querySelector('.navbar-logo');
    expect(logoElement).toBeTruthy();
    expect(logoElement.src).toContain(
      'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png',
    );
    expect(logoElement.alt).toBe('logo');
    expect(logoElement.height).toBe(50);
    expect(logoElement.width).toBe(50);
  });
});
