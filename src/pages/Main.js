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
  const [index1, setIndex1] = useState(2);
  const [index2, setIndex2] = useState(2);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function closemenu(windowselected) {
    if (trashselect) {
      setTrashselect(false);
    }
    setMenuderoule(false);

    if (windowselected === "Poste de travail") setIndex1(index1 + 1);
    if (windowselected === "Corbeille") setIndex2(index2 + 1);
  }

  function showPdt() {
    setPostetravail(true);
    setMenuderoule(false);
    setTaskbarpdt(true);
    let newArray = windowsArray;
    if (newArray.includes("Poste de travail") === false) {
      newArray.push("Poste de travail");
    }
    setIndex1(index1 + 1);
    setIndex2(index2 - 1);

    setWindowsarray(newArray);
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
    setIndex2(index2 + 1);
    setIndex1(index1 - 1);
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
        index1={index1}
        index2={index2}
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
