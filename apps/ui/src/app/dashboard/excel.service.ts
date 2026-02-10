import { Injectable, signal } from '@angular/core';

@Injectable()
export class ExcelService {
  fileName = signal('');
  rowData = signal<unknown[]>([]);
  headers = signal<string[]>([]);
}
