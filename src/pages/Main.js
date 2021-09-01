import React, { useState } from "react";
import Menu from "../components/Menu";
import Demarrer from "../components/Demarrer";
import Menuderoule from "../components/Menuderoule";
import Fenetre from "../components/Fenetre";
import Taskbar from "../components/Taskbar";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [posteTravail, setPostetravail] = useState(false);
  const [taskbarPdt, setTaskbarpdt] = useState(false);

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div onClick={() => closemenu()} className="windows_all"></div>
      <div style={{ display: "flex" }}>
        <Demarrer setmenu={setmenu} />
        <Menu />
        {menuderoule && <Menuderoule setPostetravail={showPdt} />}
        {taskbarPdt && (
          <Taskbar appname={"Poste de travail"} hidewindow={hidePdt} />
        )}
      </div>
      {posteTravail && <Fenetre closePdt={closePdt} />}
    </div>
  );
}

export default Main;
