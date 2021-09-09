import React from "react";
import Trash from "../components/Trash";
import Fenetre from "../components/Fenetre";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";
import postetravail from "../assets/5131-tOo-Postedetravail.png";
import { Document, Page, pdfjs } from "react-pdf";
import moncv from "../assets/CV E.PFAUWADEL.pdf";
import Cvpdf from "./Cvpdf";
import Icone from "./Icone";
import trashlogo from "../assets/trash.png";

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
              closeWindow={props.closeWindow}
              hideWindow={props.hideWindow}
              width={"700px"}
              text={"Poste de travail"}
              logo={postetravail}
              content={<ContentPdt />}
            />
          );
        else if (window === "Corbeille" && props.trash === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentTrash />}
              width={"550px"}
              closeWindow={props.closeWindow}
              text={"Corbeille"}
              logo={props.trashlogo}
              hideWindow={props.hideWindow}
            />
          );
        else if (window === "Mon Cv.pdf" && props.cv === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentTrash />}
              width={"550px"}
              closePdt={props.closeTrash}
              text={"Mon Cv.pdf"}
              logo={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              hidewindow={props.hideTrash}
            />
          );
      })}

      <div className="icones">
        <Icone
          showWindow={props.showWindow}
          name="Corbeille"
          logo={trashlogo}
        />
      </div>

      {/* <div className="scrollcv">
        <Document file={moncv}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
    </div>
  );
}

export default WindowsArea;
