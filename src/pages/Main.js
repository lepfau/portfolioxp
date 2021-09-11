import React, { useState } from "react";
import Demarrer from "../components/Bureau/Demarrer";
import Menuderoule from "../components/Menu deroulant/Menuderoule";
import Taskbar from "../components/Taskbar/Taskbar";
import Clock from "react-digital-clock";
import photoed from "../assets/photoed.PNG";
import useSound from "use-sound";
import msnsound from "../assets/msn.mp3";
import msnlogo from "../assets/msn_messenger.png";
import WindowsArea from "../components/Bureau/WindowsArea";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);
  //FENETRES SUR LE BUREAU
  const [posteTravail, setPostetravail] = useState(false);
  const [trash, setTrash] = useState(false);
  const [cv, setCv] = useState(false);
  const [mesprojets, setMesprojets] = useState(false);
  const [mail, setMail] = useState(false);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function closemenu() {
    setMenuderoule(false);
  }

  function showWindow(win) {
    console.log("here");
    setMenuderoule(false);
    if (win === "Poste de travail") setPostetravail(true);
    if (win === "Corbeille") setTrash(true);
    if (win === "Mon Cv.pdf") setCv(true);
    if (win === "Mes Projets") setMesprojets(true);
    if (win === "Me contacter") setMail(true);
    let newArray = windowsArray;
    if (newArray.includes(win) === false) {
      newArray.push(win);
    }
  }

  function closeWindow(win) {
    if (win === "Poste de travail") setPostetravail(false);
    else if (win === "Corbeille") setTrash(false);
    else if (win === "Mon Cv.pdf") setCv(false);
    else if (win === "Mes Projets") setMesprojets(false);
    else if (win === "Me contacter") setMail(false);
    let arr = windowsArray;
    arr.splice(arr.indexOf(win), 1);
    //enlever la fenetre fermee de l'array
    setWindowsarray(arr);
  }

  function hideWindow(win) {
    if (win === "Corbeille") setTrash(!trash);
    else if (win === "Poste de travail") setPostetravail(!posteTravail);
    else if (win === "Mon Cv.pdf") setCv(!cv);
    else if (win === "Mes Projets") setMesprojets(!mesprojets);
    else if (win === "Me contacter") setMail(!mail);
    closemenu();
  }

  const [play] = useSound(msnsound);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <WindowsArea
        closemenu={closemenu}
        showWindow={showWindow}
        closeWindow={closeWindow}
        hideWindow={hideWindow}
        posteTravail={posteTravail}
        trash={trash}
        cv={cv}
        mail={mail}
        mesprojets={mesprojets}
        windowArray={windowsArray}
      />
      <div style={{ display: "flex" }}>
        <div>
          <Demarrer setmenu={setmenu} />
        </div>
        <div className="barremenu">
          {windowsArray.map((window) => {
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
        ;
        <div className="horloge">
          <img
            style={{ height: "15px", marginRight: "10px" }}
            src={msnlogo}
            alt="msnlogo"
          />
          <img
            style={{ height: "15px", marginRight: "10px" }}
            src="https://icon-library.com/images/volume-icon/volume-icon-17.jpg"
            alt="volum icon"
          />
          <Clock format={"hh-mm"} hour12={false} />
        </div>
      </div>

      <div className="menuderoule_container">
        {menuderoule && <Menuderoule showWindow={showWindow} />}
      </div>
      <div className="msncontainer">
        <div className="msnnotif">
          <div className="msnheader">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt="msn"
                style={{ height: "20px" }}
                src="https://iconape.com/wp-content/files/fb/353373/png/353373.png"
              />
              <p>Msn Messenger</p>
            </div>
            <p style={{ marginRight: "10px" }}>X</p>
          </div>

          <div className="msncontent">
            <img
              className="menuderoule_items_pic"
              src={photoed}
              alt="moi"
            ></img>
            <p style={{ marginLeft: "10px" }}>Merci de votre visite</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
