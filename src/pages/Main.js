import React, { useState } from "react";
import Demarrer from "../components/Demarrer";
import Menuderoule from "../components/Menuderoule";
import Taskbar from "../components/Taskbar";
import Clock from "react-digital-clock";
import trashlogo from "../assets/trash.png";
import postetravail from "../assets/5131-tOo-Postedetravail.png";
import WindowsArea from "../components/WindowsArea";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);
  const [posteTravail, setPostetravail] = useState(true);
  const [trash, setTrash] = useState(false);
  const [cv, setCv] = useState(false);

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
    console.log("trash");
    if (win === "Mon Cv.pdf") setCv(true);
    let newArray = windowsArray;
    if (newArray.includes(win) === false) {
      newArray.push(win);
    }
  }

  function closeWindow(win) {
    if (win === "Poste de travail") setPostetravail(false);
    else if (win === "Corbeille") setTrash(false);
    else if (win === "Mon Cv.pdf") setCv(false);
    let arr = windowsArray;
    arr.splice(arr.indexOf(win), 1);
    setWindowsarray(arr);
  }

  function hideWindow(win) {
    if (win === "Corbeille") setTrash(!trash);
    else if (win === "Poste de travail") setPostetravail(!posteTravail);
    else if (win === "Mon Cv.pdf") setCv(!cv);
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
                trashlogo={trashlogo}
                pdtlogo={postetravail}
                window={window}
              />
            );
          })}
        </div>
        ;
        <div className="horloge">
          <Clock format={"hh-mm"} hour12={false} />
        </div>
      </div>

      <div className="menuderoule_container">
        {menuderoule && <Menuderoule showWindow={showWindow} />}
      </div>
    </div>
  );
}

export default Main;
