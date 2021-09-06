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
  const [posteTravail, setPostetravail] = useState(false);
  const [taskbarPdt, setTaskbarpdt] = useState(false);
  const [taskbarTrash, setTaskbartrash] = useState(false);
  const [trash, setTrash] = useState(false);
  const [trashselect, setTrashselect] = useState(false);
  const [windowsArray, setWindowsarray] = useState([]);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function closemenu() {
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
    newArray.push("Poste de travail");
    setWindowsarray(newArray);
    console.log(windowsArray);
  }

  function showTrash() {
    setTrash(true);
    setMenuderoule(false);
    setTaskbartrash(true);
    let newArray = windowsArray;
    newArray.push("Corbeille");
    setWindowsarray(newArray);
    console.log(windowsArray);
  }

  function closePdt() {
    setPostetravail(false);
    setTaskbarpdt(false);
    setWindowsarray(
      windowsArray.filter((window) => window !== "Poste de travail")
    );
  }

  function closeTrash() {
    setTrash(false);
    setTaskbartrash(false);
    setWindowsarray(windowsArray.filter((window) => window !== "Corbeille"));
  }

  function hidePdt() {
    setPostetravail(!posteTravail);
  }

  function hideTrash(window) {
    if (window === "Poste de travail") {
      setPostetravail(!posteTravail);
    } else if (window === "Corbeille") {
      setTrash(!trash);
    }
  }

  function trashselection() {
    setTrashselect(!trashselect);
  }

  function changeZindex() {}

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
        closeTrash={closeTrash}
        trashlogo={trashlogo}
        trash={trash}
        hideTrash={hideTrash}
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
                image={trashlogo}
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
