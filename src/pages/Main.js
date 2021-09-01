import React, { useState } from "react";
import Menu from "../components/Menu";
import Demarrer from "../components/Demarrer";
import Menuderoule from "../components/Menuderoule";
import Fenetre from "../components/Fenetre";
import Taskbar from "../components/Taskbar";
import Clock from "react-digital-clock";
import Trash from "../components/Trash";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [posteTravail, setPostetravail] = useState(false);
  const [taskbarPdt, setTaskbarpdt] = useState(false);
  const [taskbarTrash, setTaskbartrash] = useState(false);
  const [trash, setTrash] = useState(false);

  function setmenu() {
    setMenuderoule(!menuderoule);
  }

  function closemenu() {
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

  function closeTrash() {
    setTrash(false);
    setTaskbartrash(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div onClick={() => closemenu()} className="windows_all">
        <Trash showtrash={showTrash} />
      </div>
      <div style={{ display: "flex" }}>
        <Demarrer setmenu={setmenu} />
        <Menu />
        {menuderoule && <Menuderoule setPostetravail={showPdt} />}
        {taskbarPdt && (
          <Taskbar appname={"Poste de travail"} hidewindow={hidePdt} />
        )}

        <div className="horloge">
          <Clock format={"hh-mm"} hour12={false} />
        </div>
      </div>
      {posteTravail && (
        <Fenetre closePdt={closePdt} text={"Poste de travail"} />
      )}
      {trash && <Fenetre closePdt={closeTrash} text={"Corbeille"} />}
      {taskbarTrash && <Taskbar appname={"Corbeille"} hidewindow={hideTrash} />}
    </div>
  );
}

export default Main;
