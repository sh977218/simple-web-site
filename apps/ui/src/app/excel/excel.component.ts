import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  templateUrl: './excel.component.html',
  imports: [MatButton],
})
export class ExcelComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  open() {
    /* empty */
  }

  selectedFileChange(event: Event){ /* empty */ }
}
