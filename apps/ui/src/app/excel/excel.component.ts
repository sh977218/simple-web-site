import { Component, ElementRef, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
} from 'ag-grid-community';

import { MaterialModule } from '../material.module';

import { convertDataToWorkbook, getHeader, populateGrid } from './excel';

ModuleRegistry.registerModules([AllCommunityModule]);

// pull out the values we're after, converting it into an array of rowData

@Component({
  templateUrl: './excel.component.html',
  imports: [MaterialModule, AgGridAngular],
})
export class ExcelComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
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
      const columnDefs = getHeader(workbook).map((header: string) => ({
        field: header,
        minWidth: 180,
      }));
      this.gridApi.setGridOption('rowData', rowData);
      this.gridApi.setGridOption('columnDefs', columnDefs);
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
