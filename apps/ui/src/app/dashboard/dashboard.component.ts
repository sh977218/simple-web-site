import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChartConstructorType, HighchartsChartComponent, HighchartsChartDirective } from 'highcharts-angular';

import { MaterialModule } from '../material.module';

import { ExcelComponent } from './excel.component';
import { DashboardService } from './dashboard.service';

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .chart {
        width: 100%;
        height: 400px;
        display: block;
      }
    `
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    ExcelComponent,
    HighchartsChartComponent
  ],
  providers: [DashboardService]
})
export class DashboardComponent {
  private _formBuilder = inject(FormBuilder);
  readonly dashboardService = inject(DashboardService);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });

  chartOptions = computed(()=>{
    const rowData = this.dashboardService.rowData();
    return {
      series: [
        {
          data: rowData.map((row: any) => {
            return row[this.secondFormGroup.get('secondCtrl')?.value as string];
          }),
          type: 'line',
        },
      ],
    } as Highcharts.Options;
  });
  chartConstructor: ChartConstructorType = 'chart';
}
