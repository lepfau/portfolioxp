import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import moncv from "../assets/CV E.PFAUWADEL.pdf";

function ContentCv() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="scrollcv noselect">
      <Document file={moncv} renderMode={"svg"}>
        <Page pageNumber={1} height={900} />
      </Document>
    </div>
  );
}

export default ContentCv;
