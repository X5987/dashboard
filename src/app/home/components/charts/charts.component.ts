import { Component, OnInit } from '@angular/core';
import { DesignSystemModule } from 'design-system';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [DesignSystemModule, DragScrollComponent, DragScrollItemDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit {
  public chartOptionsPie = {};
  public chartOptionsDonnut = {};

  ngOnInit() {
    this.chartOptionsPie = {
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
    };
    this.chartOptionsDonnut = {
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
    };
  }
}
