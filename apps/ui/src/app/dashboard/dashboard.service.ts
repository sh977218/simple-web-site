import { Injectable, signal } from '@angular/core';

@Injectable()
export class DashboardService {
  rowData  = signal<unknown[]>([]);
  columnDefs: string[] = [];
}
