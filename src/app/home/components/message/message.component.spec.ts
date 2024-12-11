import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { DesignSystemModule } from '@design-system';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageComponent, DesignSystemModule],
    }).compileComponents();
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the mat-card', () => {
    const compiled = fixture.nativeElement;
    const matCard = compiled.querySelector('mat-card');
    expect(matCard).toBeTruthy();
  });

  it('should contain mat-card-header within mat-card', () => {
    const compiled = fixture.nativeElement;
    const matCard = compiled.querySelector('mat-card');
    const matCardHeader = compiled.querySelector('mat-card-header');
    expect(matCard.contains(matCardHeader)).toBe(true);
  });

  it('should contain mat-card-title within mat-card-header', () => {
    const compiled = fixture.nativeElement;
    const matCardHeader = compiled.querySelector('mat-card-header');
    const matCardTitle = compiled.querySelector('mat-card-title');
    expect(matCardHeader.contains(matCardTitle)).toBe(true);
  });

  it('should contain mat-card-content within mat-card', () => {
    const compiled = fixture.nativeElement;
    const matCard = compiled.querySelector('mat-card');
    const matCardContent = compiled.querySelector('mat-card-content');
    expect(matCard.contains(matCardContent)).toBe(true);
  });

  it('should mat-card-content contains a description', () => {
    const compiled = fixture.nativeElement;
    const matCardContent = compiled.querySelector('mat-card-content');
    const description = matCardContent.querySelector('p');
    expect(matCardContent.contains(description)).toBe(true);
  });

  it('should mat-card contains mat-card-footer', () => {
    const compiled = fixture.nativeElement;
    const matCard = compiled.querySelector('mat-card');
    const matCardFooter = compiled.querySelector('mat-card-footer');
    expect(matCard.contains(matCardFooter)).toBe(true);
  });

  it('should mat-card-footer contains a button', () => {
    const compiled = fixture.nativeElement;
    const matCardFooter = compiled.querySelector('mat-card-footer');
    const buttons = matCardFooter.querySelector('button');
    expect(buttons).toBeTruthy();
  });

  it('should button call method showAlert()', () => {
    const compiled = fixture.nativeElement;
    const matCardFooter = compiled.querySelector('mat-card-footer');
    const button = matCardFooter.querySelector('#alert');
    spyOn(component, 'showAlert');
    button.click();
    fixture.detectChanges();
    expect(component.showAlert).toHaveBeenCalled();
  });
  it('should call alert() when showAlert() is called', () => {
    spyOn(window, 'alert');
    component.showAlert();
    expect(window.alert).toHaveBeenCalled();
  });

  it('should button call method dialog()', () => {
    const compiled = fixture.nativeElement;
    const matCardFooter = compiled.querySelector('mat-card-footer');
    const button = matCardFooter.querySelector('#modal');
    spyOn(component, 'openDialog');
    button.click();
    fixture.detectChanges();
    expect(component.openDialog).toHaveBeenCalled();
  });

  it('should notif after click call method notifShow()', () => {
    const compiled = fixture.nativeElement;
    const matCardFooter = compiled.querySelector('mat-card-footer');
    const button = matCardFooter.querySelector('#notif');
    expect(button).toBeTruthy();
    spyOn(component, 'showNotif');
    button.click();
    fixture.detectChanges();
    expect(component.showNotif).toHaveBeenCalled();
  });
  it('should ', () => {});
});
