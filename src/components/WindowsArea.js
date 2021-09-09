import React from "react";
import Trash from "./Icones/Trash";
import Fenetre from "./Fenetres/Fenetre";
import ContentPdt from "../components/Fenetres/ContentPdt";
import ContentTrash from "../components/Fenetres/ContentTrash";
import ContentCv from "../components/Fenetres/ContentCv";
import postetravail from "../assets/5131-tOo-Postedetravail.png";

import Icone from "./Icones/Icone";
import trashlogo from "../assets/trash.png";

function WindowsArea(props) {
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
              logo={trashlogo}
              hideWindow={props.hideWindow}
            />
          );
        else if (window === "Mon Cv.pdf" && props.cv === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentCv />}
              width={"706px"}
              height={"700px"}
              closeWindow={props.closeWindow}
              text={"Mon Cv.pdf"}
              logo={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              hideWindow={props.hideWindow}
            />
          );
      })}

      <div className="icones">
        <Icone
          showWindow={props.showWindow}
          name="Corbeille"
          logo={trashlogo}
          bottom={"71px"}
          right={"44px"}
        />
        <Icone
          showWindow={props.showWindow}
          name="Mon Cv.pdf"
          logo={
            "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
          }
          bottom={"40px"}
          top={"20px"}
          left={"45px"}
        />
      </div>
    </div>
  );
}

export default WindowsArea;
