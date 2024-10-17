import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { DialogComponent, DialogService } from 'design-system';

describe('DialogService', () => {
  let service: DialogService;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      providers: [DialogService, { provide: MatDialog, useValue: spy }],
    });

    service = TestBed.inject(DialogService);
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open a dialog', () => {
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of('result') });
    dialogSpy.open.and.returnValue(dialogRefSpyObj);

    service.openDialog();

    expect(dialogSpy.open).toHaveBeenCalledWith(DialogComponent);
  });
});
