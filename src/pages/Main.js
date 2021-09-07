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
  const [taskbarPdt, setTaskbarpdt] = useState(false);
  const [taskbarTrash, setTaskbartrash] = useState(false);
  const [trash, setTrash] = useState(false);
  const [trashselect, setTrashselect] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);
  const [fenetreArray, setFenetrearray] = useState([]);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function putOnTop(windowSelected) {
    let arr = windowsArray;
    arr.filter((window) => window !== windowSelected);
    setWindowsarray(arr);
  }

  function closemenu(windowselected) {
    if (trashselect) {
      setTrashselect(false);
    }
    setMenuderoule(false);
  }

  function showPdt() {
    setPostetravail(true);
    setMenuderoule(false);
    setTaskbarpdt(true);
    let newArray = windowsArray;
    if (newArray.includes("Poste de travail") === false) {
      newArray.push("Poste de travail");
    }

    console.log(windowsArray);
  }

  function showTrash() {
    setTrash(true);
    setMenuderoule(false);
    setTaskbartrash(true);
    let newArray = windowsArray;
    if (newArray.includes("Corbeille") === false) {
      newArray.push("Corbeille");
    }
    setWindowsarray(newArray);
    console.log(windowsArray);
  }

  function closePdt() {
    setPostetravail(false);
    setTaskbarpdt(false);
    let arr = windowsArray;
    arr.splice(arr.indexOf("Poste de travail"), 1);
    setWindowsarray(arr);
  }

  function closeTrash() {
    setTrash(false);
    setTaskbartrash(false);
    let arr = windowsArray;
    arr.splice(arr.indexOf("Corbeille"), 1);
    setWindowsarray(arr);
  }

  function hidePdt() {
    setPostetravail(!posteTravail);
  }

  function hideTrash(window) {
    setTrash(!trash);
  }

  function trashselection() {
    setTrashselect(!trashselect);
    console.log("trash clicked");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WindowsArea
        closemenu={closemenu}
        showTrash={showTrash}
        trashselection={trashselection}
        trashselect={trashselect}
        posteTravail={posteTravail}
        closePdt={closePdt}
        postetravail={postetravail}
        hidePdt={hidePdt}
        hideTrash={hideTrash}
        closeTrash={closeTrash}
        trashlogo={trashlogo}
        trash={trash}
        windowArray={windowsArray}
        putOnTop={putOnTop}
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
                hidewindow={hideTrash}
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
        {menuderoule && <Menuderoule setPostetravail={showPdt} />}
      </div>
    </div>
  );
}

export default Main;
