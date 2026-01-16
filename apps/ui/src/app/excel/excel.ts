import { read, WorkBook, utils } from 'xlsx';

export function convertDataToWorkbook(dataRows: ArrayBuffer) {
  /* convert data to binary string */
  const data = new Uint8Array(dataRows);
  const arr = [];
  for (let i = 0; i !== data.length; ++i) {
    arr[i] = String.fromCharCode(data[i]);
  }
  const bstr = arr.join('');
  return read(bstr, { type: 'binary' });
}

export function populateGrid(workbook: WorkBook) {
  // our data is in the first sheet
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  // we expect the following columns to be present
  const a = utils.sheet_to_json(worksheet, { header: 1 });
  const rowData:any[] = [];
  // start at the 2nd row - the first row are the headers
  let rowIndex = 2;
  // iterate over the worksheet pulling out the columns we're expecting
  // while (worksheet['A' + rowIndex]) {
  //   const row: any = {};
  //   Object.keys(columns).forEach((column) => {
  //     row[columns[column]] = worksheet[column + rowIndex].w;
  //   });
  //   rowData.push(row);
  //   rowIndex++;
  // }
  return rowData;
}
