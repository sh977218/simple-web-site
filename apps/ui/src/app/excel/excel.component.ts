import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
} from 'ag-grid-community';
import { convertDataToWorkbook, populateGrid } from './excel';
import { AgGridAngular } from 'ag-grid-angular';

ModuleRegistry.registerModules([AllCommunityModule]);

// pull out the values we're after, converting it into an array of rowData

@Component({
  templateUrl: './excel.component.html',
  imports: [MatButton, AgGridAngular],
})
export class ExcelComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  private gridApi!: GridApi;

  async selectedFileChange(event: Event) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const data = await file.arrayBuffer();
      const workbook = convertDataToWorkbook(data);
      const rowData = populateGrid(workbook);
      this.gridApi.setGridOption('rowData', rowData);
    }
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  columnDefs: ColDef[] = [
    { field: 'athlete', minWidth: 180 },
    { field: 'age' },
    { field: 'country', minWidth: 150 },
    { field: 'year' },
    { field: 'date', minWidth: 130 },
    { field: 'sport', minWidth: 100 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  defaultColDef: ColDef = {
    minWidth: 80,
    flex: 1,
  };
  rowData: any[] | null = [];
}
