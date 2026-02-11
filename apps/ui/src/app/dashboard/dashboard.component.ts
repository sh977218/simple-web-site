import { Component, computed, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  readonly excelService = inject(ExcelService);

  // Reactive form backing the template's mat-stepper
  stepForm: FormGroup = new FormGroup({
    steps: new FormArray([
      // Step 0: Import Excel - keep an empty group (the <app-excel> component uses ExcelService)
      new FormGroup({}),
      // Step 1: Select Chart Type
      new FormGroup({
        chartTypeCtrl: new FormControl('bar', [Validators.required])
      }),
      // Step 2: Map Data (xAxis, yAxis, aggregation)
      new FormGroup({
        xAxisCtrl: new FormControl('Country'),
        yAxisCtrl: new FormControl('Segment'),
        sumCtrl: new FormControl('Gross Sales')
      })
    ])
  });

  // Convenience getters
  get steps(): FormArray {
    return this.stepForm.get('steps') as FormArray;
  }

  get chartType(): FormControl {
    return this.steps.get([1])?.get('chartTypeCtrl') as FormControl;
  }

  get xAxisCtrl(): FormControl {
    return this.steps.get([2])?.get('xAxisCtrl') as FormControl;
  }

  get yAxisCtrl(): FormControl {
    return this.steps.get([2])?.get('yAxisCtrl') as FormControl;
  }

  get sumCtrl(): FormControl {
    return this.steps.get([2])?.get('sumCtrl') as FormControl;
  }

  chartOptions = computed(() => {
    const rowData = this.excelService.rowData();
    const chartType = this.chartType.value;
    const xAxis = this.xAxisCtrl.value;
    const xAxisData = Object.groupBy(rowData, (row) => {
      return row[xAxis] as string;
    });
    const yAxis = this.yAxisCtrl.value;
    const sum = this.sumCtrl.value;
    const yAxisData = Object.groupBy(rowData, (row) => {
      return row[yAxis];
    });

    const chartData = [];
    for (const [k, v] of Object.entries(yAxisData)) {
      if (v) {
        const xAxisDataPerYAxis = Object.groupBy(v, (row) => {
          return row[xAxis];
        });
        const totalPerYAxis = [];
        for (const [, countryDataPerSegment] of Object.entries(
          xAxisDataPerYAxis,
        )) {
          if (countryDataPerSegment) {
            const total = countryDataPerSegment.reduce((acc, row) => {
              acc += Number.parseInt(row[sum] as string);
              return acc;
            }, 0);
            totalPerYAxis.push(total);
          }
        }
        chartData.push({
          name: k,
          data: totalPerYAxis,
        });
      }
    }
    return {
      chart: {
        type: chartType,
      },
      title: {
        text: this.excelService.fileName(),
      },
      xAxis: {
        categories: Object.keys(xAxisData),
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: sum,
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
        gridLineWidth: 0,
      },
      series: chartData,
    } as Highcharts.Options;
  });
  chartConstructor: ChartConstructorType = 'chart';
}
