import { read, WorkBook, utils } from 'xlsx';

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
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const [column]= utils.sheet_to_json(worksheet, { header: 1 });
  return column as string[];
}
export function populateGrid(workbook: WorkBook) {
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return utils.sheet_to_json(worksheet);
}
