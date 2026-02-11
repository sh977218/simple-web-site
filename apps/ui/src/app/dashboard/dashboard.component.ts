import { Component, computed, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    `,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    ExcelComponent,
    HighchartsChartComponent,
  ],
  providers: [ExcelService],
})
export class DashboardComponent {
  private _formBuilder = inject(FormBuilder);
  readonly excelService = inject(ExcelService);

  // Reactive form backing the template's mat-stepper
  formGroup: FormGroup = this._formBuilder.group({
    formArray: this._formBuilder.array([
      // Step 0: Import Excel - keep an empty group (the <app-excel> component uses ExcelService)
      this._formBuilder.group({}),
      // Step 1: Select Chart Type
      this._formBuilder.group({
        chartTypeCtrl: ['bar', Validators.required],
      }),
      // Step 2: Map Data (xAxis, yAxis, aggregation)
      this._formBuilder.group({
        xAxisCtrl: [''],
        yAxisCtrl: [''],
        sumCtrl: [''],
      }),
    ]),
  });

  // Convenience getters
  get formArray(): FormArray {
    return this.formGroup.get('formArray') as FormArray;
  }

  get chartType():FormControl {
    return this.formArray.get(2).get('chartTypeCtrl') as FormControl;
  }

  chartOptions = computed(() => {
    const rowData = this.excelService.rowData();
    const countriesData = Object.groupBy(rowData, (row) => {
      return row['Country'] as string;
    });
    const segmentsData = Object.groupBy(rowData, (row) => {
      return row['Segment'];
    });
    const data = [];
    for (const [segment, segmentRows] of Object.entries(segmentsData)) {
      if (segmentRows) {
        const countryDataPerSegments = Object.groupBy(segmentRows, (row) => {
          return row['Country'];
        });
        const data1 = [];
        for (const [country, countryDataPerSegment] of Object.entries(
          countryDataPerSegments
        )) {
          if (countryDataPerSegment) {
            const total = countryDataPerSegment.reduce((acc, row) => {
              acc += Number.parseInt(row['Gross Sales'] as string);
              return acc;
            }, 0);
            data1.push(total);
          }
        }
        data.push({
          name: segment,
          data: data1,
        });
      }
    }
    return {
      chart: {
        type: this.chartType?.value
      },
      title: {
        text: this.excelService.fileName()
      },
      xAxis: {
        categories: Object.keys(countriesData),
        title: {
          text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      series: data
    } as Highcharts.Options;
  });
  chartConstructor: ChartConstructorType = 'chart';
}
