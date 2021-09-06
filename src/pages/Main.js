import React, { useState } from "react";
import Menu from "../components/Menu";
import Demarrer from "../components/Demarrer";
import Menuderoule from "../components/Menuderoule";
import Fenetre from "../components/Fenetre";
import Taskbar from "../components/Taskbar";
import Clock from "react-digital-clock";

import trashlogo from "../assets/trash.png";
import paintapp from "../assets/paint.png";

import Draggable from "react-draggable";
import postetravail from "../assets/5131-tOo-Postedetravail.png";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";
import WindowsArea from "../components/WindowsArea";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [posteTravail, setPostetravail] = useState(false);
  const [taskbarPdt, setTaskbarpdt] = useState(false);
  const [taskbarTrash, setTaskbartrash] = useState(false);
  const [taskbarPaint, setTaskbarPaint] = useState(false);
  const [trash, setTrash] = useState(false);

  const [trashselect, setTrashselect] = useState(false);
  const [index, setZindex] = useState(3);

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
  }

  function closePdt() {
    setPostetravail(false);
    setTaskbarpdt(false);
  }

  function closeTrash() {
    setTrash(false);
    setTaskbartrash(false);
  }

  function hidePdt() {
    setPostetravail(!posteTravail);
  }

  function hideTrash() {
    setTrash(!trash);
  }

  function showTrash() {
    setTrash(true);
    setTaskbartrash(true);
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
          {taskbarTrash && (
            <Taskbar
              appname={"Corbeille"}
              hidewindow={hideTrash}
              image={trashlogo}
            />
          )}
          {taskbarPdt && (
            <Taskbar
              appname={"Poste de travail"}
              hidewindow={hidePdt}
              image={postetravail}
            />
          )}
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
