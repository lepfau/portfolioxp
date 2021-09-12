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

  function closemenu() {
    setMenuderoule(false);
  }

  function showPopup() {
    setPopup(true)

  }

  //fonction pour mettre fenetre cliquée au premier plan
  function moveItem(arr, element) {
    let newArray = arr.filter((el) => el !== element);
    newArray.push(element);
    setWindowsarray(newArray)
  };



  function showWindow(win) {
    let newArray = windowsArray;
    let newTaskbar = taskbarArray
    setMenuderoule(false);
    if (win === "Poste de travail") setPostetravail(true);
    if (win === "Corbeille") setTrash(true);
    if (win === "Mon Cv.pdf") setCv(true);
    if (win === "Mes Projets") setMesprojets(true);
    if (win === "Me contacter") setMail(true);
    if (win === "Internet Explorer") { setInternet(true); setPopup(true); }
    if (win === "Popup") { setPopup(true) }
    if (newArray.includes(win) === false) {
      newArray.push(win);
    }
    if (newArray.includes("Internet Explorer") && !newArray.includes("Popup")) newArray.push("Popup")

  
  if (newTaskbar.includes(win) === false) {
    newTaskbar.push(win);
  }
  if (newTaskbar.includes("Internet Explorer") && !newTaskbar.includes("Popup")) newTaskbar.push("Popup")
}


  function closeWindow(win) {
    if (win === "Poste de travail") setPostetravail(false);
    else if (win === "Corbeille") setTrash(false);
    else if (win === "Mon Cv.pdf") setCv(false);
    else if (win === "Mes Projets") setMesprojets(false);
    else if (win === "Me contacter") setMail(false);
    else if (win === "Internet Explorer") setInternet(false)
    else if (win === "Popup") setPopup(false)
    let arr = windowsArray;
    let arr2 = taskbarArray;
    arr.splice(arr.indexOf(win), 1);
    arr2.splice(arr2.indexOf(win), 1);
    //enlever la fenetre fermee de l'array
    setWindowsarray(arr);
    setTaskbararray(arr2)
  }

  function hideWindow(win) {
    if (win === "Corbeille") setTrash(!trash);
    else if (win === "Poste de travail") setPostetravail(!posteTravail);
    else if (win === "Mon Cv.pdf") setCv(!cv);
    else if (win === "Mes Projets") setMesprojets(!mesprojets);
    else if (win === "Me contacter") setMail(!mail);
    else if (win === "Internet Explorer") setInternet(!internet)
    else if (win === "Popup") setPopup(!popup)
    closemenu();
  }



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
        internet={internet}
        popup={popup}
        windowArray={windowsArray}
        moveItem={moveItem}
      />
      <div style={{ display: "flex" }}>
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
        ;
        <div className="horloge">
          <img
            onClick={() => showMsn()}
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

      {msn && <div className="msncontainer">
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
              className="msncontent_pic"
              src={photoed}
              alt="moi"
            ></img>
            <div className="msncontent_text">
              <p style={{ marginBottom: "10px", }}>Edouard dit:</p>
              <p style={{ margin: "0px" }}>Merci de votre visite</p>
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
}

export default Main;
