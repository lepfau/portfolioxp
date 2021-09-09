import React from "react";
import Trash from "../components/Trash";
import Fenetre from "../components/Fenetre";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";
import postetravail from "../assets/5131-tOo-Postedetravail.png";
import { Document, Page, pdfjs } from "react-pdf";
import moncv from "../assets/CV E.PFAUWADEL.pdf";
import Cvpdf from "./Cvpdf";

function WindowsArea(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="windows_all" onClick={() => props.closemenu()}>
      {props.windowArray.map((window) => {
        if (window === "Poste de travail" && props.posteTravail === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closemenu={props.closemenu}
              closeWindow={props.closeWindow}
              width={"700px"}
              text={"Poste de travail"}
              logo={postetravail}
              hideWindow={props.hideWindow}
              index={props.index1}
              content={<ContentPdt />}
            />
          );
        else if (window === "Corbeille" && props.trash === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closemenu={props.closemenu}
              content={<ContentTrash />}
              width={"550px"}
              closeWindow={props.closeWindow}
              text={"Corbeille"}
              logo={props.trashlogo}
              hideWindow={props.hideWindow}
              index={props.index2}
            />
          );
        else if (window === "Mon Cv.pdf" && props.cv === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closemenu={props.closemenu}
              content={<ContentTrash />}
              width={"550px"}
              closePdt={props.closeTrash}
              text={"Mon Cv.pdf"}
              logo={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              hidewindow={props.hideTrash}
              index={props.index2}
            />
          );
      })}

      <div className="icones">
        <Trash
          showWindow={props.showWindow}
          trashselect={props.trashselection}
          boolean={props.trashselect}
        />
        <Cvpdf
          showtrash={props.showCv}
          trashselect={props.cvselection}
          boolean={props.cvselect}
        />
      </div>

      {/* <div className="icone">
        <div>
          <img
            src="https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
            alt="pdflogo"
            className="icone"
          ></img>
        </div>
        <div>
          <p>CV.pdf</p>
        </div>
      </div> */}

      {/* <div className="scrollcv">
        <Document file={moncv}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
    </div>
  );
}

export default WindowsArea;
