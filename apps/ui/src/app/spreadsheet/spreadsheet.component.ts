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
    height: '500px',
  };

  //Initialization
  workbookInit($event: any) {
    //initialize the spread
    this.spread = $event.spread;
  }

  onFileSelected() {
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.workbookInit({ spread: e.target.result });
      };

      reader.readAsArrayBuffer(this.fileInput.nativeElement.files[0]);
    }
  }
}
