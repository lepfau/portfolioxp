import React, { useState, useContext } from "react";
import Demarrer from "../components/Bureau/Demarrer";
import Menuderoule from "../components/Menu deroulant/Menuderoule";
import Taskbar from "../components/Taskbar/Taskbar";
import Clock from "react-digital-clock";
import photoed from "../assets/photoed.PNG";
import useSound from "use-sound";
import msnsound from "../assets/msn.mp3";
import volumepng from "../assets/volume.png"
import WindowsArea from "../components/Bureau/WindowsArea";
import Zoom from 'react-reveal/Zoom';
import LangContext from "../components/Context/LangContext";

function Main(props) {
  const [menuderoule, setMenuderoule] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);
  const [taskbarArray, setTaskbararray] = useState([]);
  const [msn, setMsn] = useState(false);
  const [play] = useSound(msnsound);
  //FENETRES SUR LE BUREAU
  const [posteTravail, setPostetravail] = useState(false);
  const [trash, setTrash] = useState(false);
  const [cv, setCv] = useState(false);
  const [mesprojets, setMesprojets] = useState(false);
  const [mail, setMail] = useState(false);
  const [internet, setInternet] = useState(false);
  const [popup, setPopup] = useState(false);
  const [mesimages, setMesimages] = useState(false);
  const [mesformations, setMesformations] = useState(false);
  const [mescompetences, setMescompetences] = useState(false);
  const [piano, setPiano] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const [notepad, setNotepad] = useState(false);

  const lang = useContext(LangContext);
  const enTrue = lang.language === "English";


  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function showMsn() {
    setMsn(true);
    setTimeout(() => {
      play()
    }, 1000);

    setTimeout(() => {
      setMsn(false)
    }, (6000));
  }

  function showLang() {
    setLangMenu(!langMenu)
  }

  function changeLanguageEN() {
    lang.changeLanguageEn();
    setLangMenu(false)
  }

  function changeLanguageFR() {
    lang.changeLanguageFr();
    setLangMenu(false)
  }


  function closemenu() {
    setMenuderoule(false);
  }

  function closelang() {
    setLangMenu(false)
  }

  //fonction pour mettre fenetre cliqu??e au premier plan
  function moveItem(arr, element) {
    if (arr.length > 0) {
      let newArray = arr.filter((el) => el !== element);
      newArray.push(element);
      setWindowsarray(newArray)
    }
  };

  function showWindow(win) {
    //cr??ation array pour les fenetres(et faire mise au premier plan) et array pour la taskbar
    let newArray = windowsArray;
    let newTaskbar = taskbarArray;
    //affichage des fenetres
    setMenuderoule(false);
    if (win === "Poste de travail") setPostetravail(true);
    if (win === "Mes Images") setMesimages(true);
    if (win === "Corbeille") setTrash(true);
    if (win === "Mon Cv.pdf") setCv(true);
    if (win === "Mes Projets") setMesprojets(true);
    if (win === "Me contacter") setMail(true);
    if (win === "Internet Explorer") { setInternet(true); setPopup(true); }
    if (win === "Popup") { setPopup(true) }
    if (win === "Mes Formations") setMesformations(true);
    if (win === "Mes Comp??tences") setMescompetences(true);
    if (win === "Piano") setPiano(true);
    if (win === "Bloc-notes") setNotepad(true);

    if (newArray.includes(win) === false) {
      newArray.push(win);
    }
    if (newArray.includes("Internet Explorer") && !newArray.includes("Popup")) newArray.push("Popup")

    if (newTaskbar.includes(win) === false) {
      newTaskbar.push(win);
    }
    if (newTaskbar.includes("Internet Explorer") && !newTaskbar.includes("Popup")) newTaskbar.push("Popup");
    setTaskbararray(newTaskbar);
    setWindowsarray(newArray);
  }


  function closeWindow(win) {
    let arr = windowsArray;
    arr.splice(arr.indexOf(win), 1);

    let arr2 = taskbarArray;
    arr2.splice(arr2.indexOf(win), 1);
    setTaskbararray(arr2)
    setWindowsarray(arr);

    if (win === "Poste de travail" || win === "Computer") setPostetravail(false);
    else if (win === "Corbeille" || win === "Trash") setTrash(false);
    else if (win === "Mon Cv.pdf" || win === "Resume.pdf") setCv(false);
    else if (win === "Mes Projets" || win === "My Projects") setMesprojets(false);
    else if (win === "Me contacter" || win === "Contact Me") setMail(false);
    else if (win === "Internet Explorer") setInternet(false);
    else if (win === "Popup") setPopup(false);
    else if (win === "Mes Images" || win === "My Pictures") setMesimages(false)
    else if (win === "Mes Formations" || win === "My Education") setMesformations(false)
    else if (win === "Mes Comp??tences" || win === "My Skills") setMescompetences(false)
    else if (win === "Bloc-notes" || win === "Notepad") setNotepad(false);
    else if (win === "Piano") setPiano(false)
  }

  function hideWindow(win) {
    if (win === "Corbeille" || win === "Trash") setTrash(!trash);
    else if (win === "Poste de travail" || win === "Computer") setPostetravail(!posteTravail);
    else if (win === "Mon Cv.pdf" || win === "Resume.pdf") setCv(!cv);
    else if (win === "Mes Projets" || win === "My Projects") setMesprojets(!mesprojets);
    else if (win === "Me contacter" || win === "Contact Me") setMail(!mail);
    else if (win === "Internet Explorer") setInternet(!internet)
    else if (win === "Popup") setPopup(!popup)
    else if (win === "Mes Images" || win === "My Pictures") setMesimages(!mesimages)
    else if (win === "Mes Formations" || win === "My Education") setMesformations(!mesformations)
    else if (win === "Mes Comp??tences" || win === "My Skills") setMescompetences(!mescompetences)
    else if (win === "Bloc-notes" || win === "Notepad") setNotepad(!notepad)
    else if (win === "Piano") setPiano(!piano)
    closemenu();
  }


  return (
    <Zoom>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "flex-end",

        }}
      >
        {/* Emplacement fenetres et icones */}
        <WindowsArea
          closemenu={closemenu}
          closelang={closelang}
          showWindow={showWindow}
          closeWindow={closeWindow}
          hideWindow={hideWindow}
          posteTravail={posteTravail}
          trash={trash}
          cv={cv}
          mail={mail}
          mesprojets={mesprojets}
          internet={internet}
          mesimages={mesimages}
          popup={popup}
          piano={piano}
          notepad={notepad}
          windowsArray={windowsArray}
          moveItem={moveItem}
          mesformations={mesformations}
          mescompetences={mescompetences}
        />

        {/* Menu deroulant taskbar et bas droite*/}
        <div className="menuderoule_container">
          {menuderoule && <Menuderoule shutdown={props.shutdown} showWindow={showWindow} />}
        </div>

        <div className="full_bottom">
          <div>
            <Demarrer setmenu={setmenu} />
          </div>
          <div className="barremenu">
            {taskbarArray.map((window) => {
              return (
                <Taskbar
                  key={window.length}
                  appname={window}
                  hideWindow={hideWindow}
                  window={window}
                />
              );
            })}
          </div>

          <div className="taskbar_right">
            {enTrue ? <p className='langmenuchose' onClick={() => showLang()}>ENG</p> :
              <p className="langmenuchose" onClick={() => showLang()}>FRA</p>}
            <img
              onClick={() => showMsn()}
              style={{ height: "15px", marginRight: "10px", marginLeft: "10px" }}
              src="https://www.aussitot.fr/imgred/1898.png"
              alt="msnlogo"
            />
            <img
              style={{ height: "15px", marginRight: "10px" }}
              src={volumepng}
              alt="volum icon"
            />
            <Clock format={"hh-mm"} hour12={false} />
          </div>
        </div>

        {msn && <div className="msncontainer">
          <div className="msnnotif">
            <div className="msnheader">
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", marginTop: '10px' }}>
                <img
                  alt="msn"
                  style={{ height: "20px", marginRight: '6px' }}
                  src="https://iconape.com/wp-content/files/fb/353373/png/353373.png"
                />
                <p style={{ fontWeight: "600" }}>Msn Messenger</p>
              </div>
              <p style={{ marginRight: "10px" }}>X</p>
            </div>

            <div className="msncontent">
              <img
                className="msncontent_pic"
                src={photoed}
                alt="moi"
              ></img>
              <div className="msncontent_text">
                <p style={{ marginBottom: "10px", fontStyle: 'italic' }}>{enTrue ? 'Edouard says' : 'Edouard dit'}:</p>
                <p style={{ margin: "0px" }}>{enTrue ? "Thanks for coming here ! " : "Merci de votre visite !"}</p>
              </div>
            </div>
          </div>
        </div>}
        {langMenu &&
          <div className="langmenu">
            <p className="langmenuitem" onClick={() => changeLanguageEN()} >ENG</p>
            <p className="langmenuitem" onClick={() => changeLanguageFR()}>FRA</p>
          </div>
        }
      </div>
    </Zoom>
  );
}

export default Main;
