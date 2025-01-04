import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    fixture.detectChanges();
  });
});
