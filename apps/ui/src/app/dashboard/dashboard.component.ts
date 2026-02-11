import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';

import { MaterialModule } from '../material.module';

import { ExcelComponent } from './excel.component';
import { ExcelService } from './excel.service';

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
  providers: [ExcelService]
})
export class DashboardComponent {
  private _formBuilder = inject(FormBuilder);
  readonly excelService = inject(ExcelService);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    columnCtrl: ['', Validators.required],
    typeCtrl: ['', Validators.required]
  });

  chartOptions = computed(() => {
    const rowData = this.excelService.rowData();
    return {
      title: {
        text: this.excelService.fileName()
      },
      series: [
        {
          data: rowData.map((row: Record<string, unknown>) => {
            return row[this.secondFormGroup.get('columnCtrl')?.value as string];
          }),
          type: this.secondFormGroup.get('typeCtrl')?.value as string
        }
      ]
    } as Highcharts.Options;
  });
  chartConstructor: ChartConstructorType = 'chart';
}
