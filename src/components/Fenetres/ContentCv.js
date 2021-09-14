import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import moncv from "../../assets/CV E.PFAUWADEL.pdf";

function ContentCv(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="scrollcv noselect">
      <Document file={moncv}>
        <Page pageNumber={1} renderAnnotationLayer={false} scale={props.scale} />
      </Document>
    </div>
  );
}

export default ContentCv;
