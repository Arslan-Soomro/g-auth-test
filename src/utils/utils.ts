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

export const pdfSetting = {
  setLang: "he",
  thumbnailViewBtn: true,
  searchBtn: true,
  nextPreviousBtn: true,
  pageNumberTxt: true,
  totalPagesLabel: true,
  zoomBtns: true,
  scaleSelector: true,
  presantationModeBtn: true,
  openFileBtn: true,
  printBtn: true,
  downloadBtn: true,
  bookmarkBtn: true,
  secondaryToolbarBtn: true,
  firstPageBtn: true,
  lastPageBtn: true,
  pageRotateCwBtn: true,
  pageRotateCcwBtn: true,
  cursorSelectTextToolbarBtn: true,
  cursorHandToolbarBtn: true,
};

export const docxSetting = {
  styleMap: null,
  includeEmbeddedStyleMap: true,
  includeDefaultStyleMap: true,
  convertImage: null,
  ignoreEmptyParagraphs: false,
  idPrefix: "",
  isRtl: "auto",
};

export const pptxSetting = {
  slidesScale: "50%", //Change Slides scale by percent
  slideMode: true /** true,false*/,
  slideType:
    "divs2slidesjs" /*'divs2slidesjs' (default) , 'revealjs'(https://revealjs.com) */,
  revealjsPath:
    "" /*path to js file of revealjs. default:  './revealjs/reveal.js'*/,
  keyBoardShortCut: true /** true,false ,condition: slideMode: true*/,
  mediaProcess:
    true /** true,false: if true then process video and audio files */,
  jsZipV2: false,
  slideModeConfig: {
    first: 1,
    nav: true /** true,false : show or not nav buttons*/,
    navTxtColor: "black" /** color */,
    keyBoardShortCut: false /** true,false ,condition: */,
    showSlideNum: true /** true,false */,
    showTotalSlideNum: true /** true,false */,
    autoSlide: 1 /** false or seconds , F8 to active ,keyBoardShortCut: true */,
    randomAutoSlide: false /** true,false ,autoSlide:true */,
    loop: true /** true,false */,
    background: false /** false or color*/,
    transition:
      "default" /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */,
    transitionTime: 1 /** transition time between slides in seconds */,
  },
  revealjsConfig: {},
};
