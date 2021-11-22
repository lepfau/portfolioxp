import React, {useContext} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDownloadLink } from '@react-pdf/renderer';
import moncv from "../../assets/CV E.PFAUWADEL 2021.pdf";
import moncven from "../../assets/CV E.PFAUWADEL (en).pdf"
import LangContext from "../Context/LangContext";

function ContentCv(props) {

  const lang = useContext(LangContext)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="scrollcv noselect">
      <div>
       <a style={{marginRight:"10px"}} target="_blank" href=
       {lang.language === "English" ? "https://drive.google.com/uc?export=download&id=10tk9eNLfZ0MbdmkrynhIaelnlqO3AcNp" :
       "https://drive.google.com/uc?export=download&id=1tmxVMzra9CxbxaYPGevbf1Chmk83J2hJ"}
       >{lang.language === "English" ? "Download" : "Télécharger"}</a>
    </div>
      <Document file={lang.language === "English" ? moncven : moncv} style={{display:"flex", justifyContent:'center'}}>
        <Page pageNumber={1} renderAnnotationLayer={false} scale={props.scale} />
      </Document>
    </div>
  );
}

export default ContentCv;
