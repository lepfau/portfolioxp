import React from "react";
import Trash from "../Icones/Trash";
import Fenetre from "../Fenetres/Fenetre";
import ContentPdt from "../Fenetres/ContentPdt";
import ContentTrash from "../Fenetres/ContentTrash";
import ContentCv from "../Fenetres/ContentCv";
import ContentProjets from "../Fenetres/ContentProjets";
import ContentInternet from "../Fenetres/ContentInternet"
import ContentPopup from "../Fenetres/ContentPopup";
import Form from "../Form";
import postetravail from "../../assets/5131-tOo-Postedetravail.png";
import logointernet from "../../assets/internetlogo.png";

import Icone from "../Icones/Icone";
import trashlogo from "../../assets/trash.png";


function WindowsArea(props) {

  return (
    <div className="windows_all" onClick={() => props.closemenu()}>
      {props.windowsArray.map((window, index) => {
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
              array={props.windowsArray}
              moveItem={props.moveItem}
            />
          );
        else if (window === "Popup" && props.popup === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentPopup />}
              width={"500px"}
              height={"400px"}
              closeWindow={props.closeWindow}
              text={"Popup"}
              logo={
                logointernet

              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
            />
          );
        else if (window === "Internet Explorer" && props.internet === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentInternet />}
              width={"800px"}
              height={"600px"}
              closeWindow={props.closeWindow}
              text={"Internet Explorer"}
              logo={
                logointernet
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
            />
          );

        else if (window === "Me contacter" && props.mail === true)
          return (

            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<Form />}
              width={"550px"}
              height={"350px"}
              closeWindow={props.closeWindow}
              text={"Me contacter"}
              logo={
                "https://upload.wikimedia.org/wikipedia/fr/5/53/Outlook_express_logo-200-200.jpg"
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
            />
          );
        else if (window === "Mes Projets" && props.mesprojets === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentProjets />}
              width={"550px"}
              closeWindow={props.closeWindow}
              text={"Mes Projets"}
              logo={
                "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png"
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
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
              array={props.windowsArray}
              moveItem={props.moveItem}
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
              array={props.windowsArray}
              moveItem={props.moveItem}
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