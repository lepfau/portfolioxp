import React, { useState, useContext } from "react";
import Fenetre from "../Fenetres/Fenetre";
import ContentPdt from "../Fenetres/ContentPdt";
import ContentTrash from "../Fenetres/ContentTrash";
import ContentCv from "../Fenetres/ContentCv";
import ContentProjets from "../Fenetres/ContentProjets";
import ContentInternet from "../Fenetres/ContentInternet"
import ContentImages from "../Fenetres/ContentImages";
import ContentPopup from "../Fenetres/ContentPopup";
import Form from "../Fenetres/Form";
import postetravail from "../../assets/5131-tOo-Postedetravail.png";
import logointernet from "../../assets/internetlogo.png";
import Piano from "./../Fenetres/Piano"

import Icone from "../Icones/Icone";
import trashlogo from "../../assets/trash.png";
import ContentFormations from "../Fenetres/ContentFormations";
import ContentCompetences from "../Fenetres/ContentCompetences";

import LangContext from "../Context/LangContext"

function WindowsArea(props) {
  const [fullScreenPdt, setFullscreenPdt] = useState(false);
  const [fullScreenPopup, setFullscreenPopup] = useState(false);
  const [fullScreenInternet, setFullScreenInternet] = useState(false);
  const [fullScreenContact, setFullScreenContact] = useState(false);
  const [fullScreenTrash, setFullScreenTrash] = useState(false);
  const [fullScreenCv, setfullScreenCv] = useState(false);
  const [fullScreenProjets, setfullScreenProjets] = useState(false);
  const [fullScreenImages, setFullscreenImages] = useState(false);
  const [fullScreenFormations, setFullscreenFormations] = useState(false);
  const [fullScreenCompetences, setFullscreenCompetences] = useState(false);
  const [fullScreenPiano, setFullscreenPiano] = useState(false);
  const [pianowidth, setPianoWidth] = useState('490')
  const [scale, setScale] = useState(1)

  const lang = useContext(LangContext);

  function setthatScale() {
    fullScreenCv ? setScale(1) : setScale(2.2);

  }

  function makefullScreen(win) {
    if (win === "Poste de travail" || win === "Computer") setFullscreenPdt(!fullScreenPdt);
    else if (win === "Popup") setFullscreenPopup(!fullScreenPopup);
    else if (win === "Internet Explorer") setFullScreenInternet(!fullScreenInternet);
    else if (win === "Me contacter" || win === "Contact Me") setFullScreenContact(!fullScreenContact);
    else if (win === "Mes Projets" || win === "My Projects") setfullScreenProjets(!fullScreenProjets);
    else if (win === "Corbeille" || win === "Trash") setFullScreenTrash(!fullScreenTrash);
    else if (win === "Mes Images" || win === "My Pictures") setFullscreenImages(!fullScreenImages);
    else if (win === "Mes Formations" || win === "My Education") setFullscreenFormations(!fullScreenFormations)
    else if (win === "Mes Compétences" || win === "My Skills") setFullscreenCompetences(!fullScreenCompetences)
    else if (win === "Piano") { setFullscreenPiano(!fullScreenPiano); setPianoWidth(800) }
    else if ((win === "Mon Cv.pdf" || win === "Resume.pdf") && fullScreenCv === false) { setfullScreenCv(true); setthatScale() };
    if ((win === "Mon Cv.pdf" || win === "Resume.pdf") && fullScreenCv) { setfullScreenCv(false); setthatScale() }
  }

  function closeAll() {
    props.closemenu();
    props.closelang()
  }


  return (
    <div className="windows_all" onClick={() => closeAll()}>

      {props.windowsArray.map((window, index) => {
        if (window === "Poste de travail" && props.posteTravail === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closeWindow={props.closeWindow}
              hideWindow={props.hideWindow}
              width={"700px"}
              text={lang.language === "English" ? "Computer" : "Poste de travail"}
              logo={postetravail}
              content={<ContentPdt />}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenPdt}
            />
          );


        else if (window === "Piano" && props.piano === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<Piano pianowidth />}
              width={"500px"}
              height={"150px"}
              closeWindow={props.closeWindow}
              text={"Piano"}
              logo={
                "https://www.pngrepo.com/png/38467/512/piano-top-view.png"

              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenPiano}
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
              makefullScreen={makefullScreen}
              fullScreen={fullScreenPopup}
            />
          );
        else if (window === "Mes Images" && props.mesimages === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentImages />}
              width={"700px"}
              height={"500px"}
              closeWindow={props.closeWindow}
              text={lang.language === "English" ? "My Pictures" : "Mes Images"}
              logo={
                "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"

              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenImages}
            />
          );

        else if (window === "Mes Formations" && props.mesformations === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentFormations />}
              width={"700px"}
              height={"500px"}
              closeWindow={props.closeWindow}
              text={lang.language === "English" ? "My Education" : "Mes Formations"}
              logo={
                "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"

              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenFormations}
            />
          );

        else if (window === "Mes Compétences" && props.mescompetences === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentCompetences />}
              width={"700px"}
              height={"500px"}
              closeWindow={props.closeWindow}
              text={lang.language === "English" ? "My Skills" : "Mes Compétences"}
              logo={
                "https://iconarchive.com/download/i95231/dtafalonso/modern-xp/ModernXP-16-Folder-Documents.ico"

              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenCompetences}
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
              makefullScreen={makefullScreen}
              fullScreen={fullScreenInternet}
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
              text={lang.language === "English" ? "Contact Me" : "Me contacter"}
              logo={
                "https://upload.wikimedia.org/wikipedia/fr/5/53/Outlook_express_logo-200-200.jpg"
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenContact}

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
              text={lang.language === "English" ? "My Projects" : "Mes Projets"}
              logo={
                "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png"
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenProjets}
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
              text={lang.language === "English" ? "Trash" : "Corbeille"}
              logo={trashlogo}
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenTrash}
            />
          );
        else if (window === "Mon Cv.pdf" && props.cv === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              content={<ContentCv scale={scale} />}
              width={"706px"}
              height={"700px"}
              closeWindow={props.closeWindow}
              text={lang.language === "English" ? "Resume.pdf" : "Mon Cv.pdf"}
              logo={
                "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png"
              }
              hideWindow={props.hideWindow}
              array={props.windowsArray}
              moveItem={props.moveItem}
              makefullScreen={makefullScreen}
              fullScreen={fullScreenCv}
              scale={scale}
            />
          );
      })}

      <div className="icones">
        <Icone
          showWindow={props.showWindow}
          name={lang.language === "English" ? "Trash" : "Corbeille"}
          logo={trashlogo}
          bottom={"71px"}
          right={"44px"}
        />
        <Icone
          showWindow={props.showWindow}
          name={lang.language === "English" ? "Resume.pdf" : "Mon Cv.pdf"}
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
