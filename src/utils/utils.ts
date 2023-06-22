export const scriptSrcArray = [
  "include/jquery/jquery-3.3.1.min.js",
  // "include/d3/d3.min.js",
  // "include/PPTXjs/js/d3.min.js",
  // "include/PPTXjs/js/nv.d3.min.js",
  "include/pdf/pdf.js",
  "include/docx/jszip-utils.js",
  "include/docx/mammoth.browser.min.js",
  "include/PPTXjs/js/filereader.js",
  "include/PPTXjs/js/pptxjs.js",
  "include/PPTXjs/js/divs2slides.js",
  "include/SheetJS/handsontable.full.min.js",
  "include/SheetJS/xlsx.full.min.js",
  "include/verySimpleImageViewer/js/jquery.verySimpleImageViewer.js",
  "include/officeToHtml/officeToHtml.js",
];

export function getScriptSrcs(prefix: string) {
  return scriptSrcArray.map((src) => prefix + src);
}
