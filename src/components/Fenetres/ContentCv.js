import React, {useContext} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import moncv from "../../assets/CV E.PFAUWADEL 2021.pdf";
import moncven from "../../assets/CV E.PFAUWADEL (en).pdf"
import LangContext from "../Context/LangContext";

function ContentCv(props) {

  const lang = useContext(LangContext)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="scrollcv noselect">
      <Document file={lang.language === "English" ? moncven : moncv} style={{display:"flex", justifyContent:'center'}}>
        <Page pageNumber={1} renderAnnotationLayer={false} scale={props.scale} />
      </Document>
    </div>
  );
}

export default ContentCv;
