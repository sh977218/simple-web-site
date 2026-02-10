import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry
} from 'ag-grid-community';

import { MaterialModule } from '../material.module';

import { convertDataToWorkbook, getHeader, populateGrid } from './excel';
import { DashboardService } from './dashboard.service';

ModuleRegistry.registerModules([AllCommunityModule]);

// pull out the values we're after, converting it into an array of rowData

@Component({
  selector: 'app-excel',
  template: `
    <section class="flex flex-col flex-wrap justify-between mb-5">
      <div>
        <button (click)="fileInput.click()" mat-raised-button type="button">
          Choose File
        </button>
      </div>
      <input
        #fileInput
        (change)="selectedFileChange($event)"
        hidden
        id="file"
        type="file"
      />
    </section>
    <section
      class="flex flex-col flex-wrap justify-between"
      style="width: 100%; height: 800px;"
    >
      <ag-grid-angular
        (gridReady)="onGridReady($event)"
        [columnDefs]="[]"
        [defaultColDef]="defaultColDef"
        [rowData]="[]"
        style="width: 100%; height: 100%;"
      />
    </section>
  `,
  host: {
    class: 'flex flex-col flex-grow basis-0',
  },
  imports: [MaterialModule, AgGridAngular],
})
export class ExcelComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  private dashboardService = inject(DashboardService);

  defaultColDef: ColDef = {
    minWidth: 80,
    flex: 1,
  };
  private gridApi!: GridApi;

  async selectedFileChange(event: Event) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const data = await file.arrayBuffer();
      const workbook = convertDataToWorkbook(data);
      const rowData = populateGrid(workbook);
      this.dashboardService.rowData.set(rowData);
      const columnDefs = getHeader(workbook).map((header: string) => ({
        field: header,
        minWidth: 180,
      }));
      this.dashboardService.columnDefs = columnDefs.map((colDef) => colDef.field);
      this.gridApi.setGridOption('rowData', rowData);
      this.gridApi.setGridOption('columnDefs', columnDefs);
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
