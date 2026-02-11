import { Injectable, signal } from '@angular/core';

@Injectable()
export class ExcelService {
  fileName = signal('');
  rowData = signal<Record<string, string | number>[]>([]);
  headers = signal<string[]>([]);
}
