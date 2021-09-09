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
  const [posteTravail, setPostetravail] = useState(true);
  const [trash, setTrash] = useState(false);
  const [trashselect, setTrashselect] = useState(false);
  const [cvselect, setCvselect] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);
  const [cv, setCv] = useState(false);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function closemenu(windowselected) {
    if (trashselect) {
      setTrashselect(false);
    }
    setMenuderoule(false);
  }

  function showWindow(win) {
    setMenuderoule(false);
    if (win === "Poste de travail") setPostetravail(true);
    else if (win === "Corbeille") setTrash(true);
    else if (win === "Mon Cv.pdf") setCv(true);
    let newArray = windowsArray;
    if (newArray.includes(win) === false) {
      newArray.push(win);
    }

    console.log(windowsArray);
  }

  function closeWindow(win) {
    if (win === "Poste de travail") setPostetravail(false);
    else if (win === "Corbeille") setTrash(false);
    let arr = windowsArray;
    arr.splice(arr.indexOf(win), 1);
    setWindowsarray(arr);
  }

  function hideWindow(win) {
    if (win === "Corbeille") setTrash(!trash);
    else if (win === "Poste de travail") setPostetravail(!posteTravail);
    closemenu();
  }

  function trashselection() {
    setTrashselect(!trashselect);
    console.log("trash clicked");
  }

  function cvselection() {
    setCvselect(!cvselect);
    console.log("cv clicked");
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
        trashselection={trashselection}
        trashselect={trashselect}
        cvselection={cvselection}
        cvselect={cvselect}
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
