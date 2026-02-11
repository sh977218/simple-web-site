import { read, utils, WorkBook, WorkSheet } from 'xlsx';

export function getFirstWorkSheet(workbook: WorkBook) {
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  trimHeaders(worksheet);
  return worksheet;
}

export function trimHeaders(ws: WorkSheet) {
  if (!ws || !ws['!ref']) return;
  const ref = utils.decode_range(ws['!ref']);
  for (let C = ref.s.c; C <= ref.e.c; ++C) {
    const cell = ws[utils.encode_cell({ r: ref.s.r, c: C })];
    if (cell.t == 's') {
      cell.v = cell.v.trim();
      if (cell.w) cell.w = cell.w.trim();
    }
  }
}

export function convertDataToWorkbook(dataRows: ArrayBuffer) {
  const data = new Uint8Array(dataRows);
  const arr = [];
  for (let i = 0; i !== data.length; ++i) {
    arr[i] = String.fromCharCode(data[i]);
  }
  const str = arr.join('');
  return read(str, { type: 'binary' });
}

export function getHeader(workbook: WorkBook) {
  const worksheet = getFirstWorkSheet(workbook);
  const [column] = utils.sheet_to_json(worksheet, { header: 1 });
  return column as string[];
}

export function populateGrid(workbook: WorkBook) {
  const worksheet = getFirstWorkSheet(workbook);
  return utils.sheet_to_json(worksheet) as Record<string, string | number>[];
}
