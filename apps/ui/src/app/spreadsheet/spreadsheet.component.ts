import { Component } from '@angular/core';
import * as GC from '@mescius/spread-sheets';
import { SpreadSheetsModule } from '@mescius/spread-sheets-angular';

@Component({
  templateUrl: './spreadsheet.component.html',
  imports: [SpreadSheetsModule]
})
export class SpreadsheetComponent {
  title = 'sjs-angular-app';
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
}
