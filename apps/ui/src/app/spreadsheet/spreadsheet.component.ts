import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import * as GC from '@mescius/spread-sheets';
import { SpreadSheetsModule } from '@mescius/spread-sheets-angular';
import { MatButton } from '@angular/material/button';

@Component({
  templateUrl: './spreadsheet.component.html',
  imports: [SpreadSheetsModule, MatButton],
})
export class SpreadsheetComponent {
  title = 'sjs-angular-app';
  @ViewChild('fileInput') fileInput!: ElementRef;

  spread!: GC.Spread.Sheets.Workbook;
  hostStyle = {
    width: '100%',
    height: '100%',
  };
  openOptions = {
    openMode: 0,
    includeStyles: true,
    includeFormulas: true,
    frozenColumnsAsRowHeaders: false,
    frozenRowsAsColumnHeaders: false,
    fullRecalc: false,
    dynamicReferences: true,
    calcOnDemand: false,
    includeUnusedStyles: true,
    convertSheetTableToDataTable: false,
    incrementalLoading: false,
    encoding: 'UTF-8',
    rowDelimiter: '\r\n',
    columnDelimiter: ',',
  };

  initSpread($event: any) {
    this.spread = $event.spread;
  }

  onFileSelected() {
    const options = this.openOptions;
    const file = this.fileInput.nativeElement.files[0];

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.spread.import(
          file,
          function () {},
          function () {},
        );
      };

      reader.readAsArrayBuffer(file);
    }
  }
}
