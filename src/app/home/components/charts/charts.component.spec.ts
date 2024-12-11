import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsComponent } from './charts.component';
import { DesignSystemModule } from '@design-system';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DesignSystemModule,
        DragScrollComponent,
        DragScrollItemDirective,
        ChartsComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chartOptionsPie correctly', () => {
    expect(component.chartOptionsPie).toEqual({
      theme: 'ag-default',
      data: [
        { label: 'Angular', value: 25 },
        { label: 'TypeScript', value: 19 },
        { label: 'Html', value: 17 },
        { label: 'Css', value: 15 },
        { label: 'Webstorm', value: 14 },
        { label: 'Pop!_OS', value: 12 },
      ],
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          calloutLabelKey: 'label',
        },
      ],
      background: {
        fill: 'white',
      },
    });
  });

  it('should initialize chartOptionsDonnut correctly', () => {
    expect(component.chartOptionsDonnut).toEqual({
      theme: 'ag-charts',
      data: [
        { asset: 'Stocks', amount: 60000 },
        { asset: 'Bonds', amount: 40000 },
        { asset: 'Cash', amount: 7000 },
        { asset: 'Real Estate', amount: 5000 },
        { asset: 'Commodities', amount: 3000 },
      ],
      series: [
        {
          type: 'donut',
          angleKey: 'amount',
          calloutLabelKey: 'asset',
          innerRadiusRatio: 0.7,
        },
      ],
      background: {
        fill: 'white',
      },
    });
  });
});
