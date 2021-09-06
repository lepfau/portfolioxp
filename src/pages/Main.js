import React, { useState } from "react";
import Menu from "../components/Menu";
import Demarrer from "../components/Demarrer";
import Menuderoule from "../components/Menuderoule";
import Fenetre from "../components/Fenetre";
import Taskbar from "../components/Taskbar";
import Clock from "react-digital-clock";
import Trash from "../components/Trash";
import trashlogo from "../assets/trash.png";
import paintapp from "../assets/paint.png";
import CanvasDraw from "react-canvas-draw";
import Draggable from "react-draggable";
import postetravail from "../assets/5131-tOo-Postedetravail.png";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";

function Main() {
  const [menuderoule, setMenuderoule] = useState(false);
  const [posteTravail, setPostetravail] = useState(false);
  const [taskbarPdt, setTaskbarpdt] = useState(false);
  const [taskbarTrash, setTaskbartrash] = useState(false);
  const [taskbarPaint, setTaskbarPaint] = useState(false);
  const [trash, setTrash] = useState(false);
  const [paint, setPaint] = useState(false);
  const [trashselect, setTrashselect] = useState(false);
  const [index, setZindex] = useState(3);

  function showPaint() {
    setPaint(true);
    setMenuderoule(false);
    setTaskbarPaint(true);
  }

  function closePaint() {
    setPaint(false);
    setTaskbarPaint(false);
  }

  function hidePaint() {
    setPaint(!paint);
    setMenuderoule(false);
  }

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
    setZindex(index + 1);
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
      <div onClick={() => closemenu()} className="windows_all">
        <Trash
          showtrash={showTrash}
          trashselect={trashselection}
          trashboolean={trashselect}
        />

        {paint && <img className="window" src={paintapp}></img>}

        {paint && (
          <div className="canvas">
            <CanvasDraw
              brushRadius={2}
              hideGrid={true}
              style={{
                height: "314px",
                width: "600px",
              }}
            />
          </div>
        )}
        <p
          style={{ cursor: "default" }}
          onClick={() => closePaint()}
          className="cross"
        >
          XXX
        </p>

        {paint && (
          <p
            style={{ cursor: "default" }}
            onClick={() => hidePaint()}
            className="reduire"
          >
            XXX
          </p>
        )}
      </div>
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
          {taskbarPaint && (
            <Taskbar
              appname={"Paint"}
              hidewindow={hidePaint}
              image={
                "https://i1.sndcdn.com/artworks-000078425043-oloazo-t500x500.jpg"
              }
            />
          )}
        </div>
        ;
        <div className="horloge">
          <Clock format={"hh-mm"} hour12={false} />
        </div>
      </div>

      {posteTravail && (
        <Fenetre
          closemenu={closemenu}
          closePdt={closePdt}
          width={"550px"}
          text={"Poste de travail"}
          logo={postetravail}
          hidewindow={hidePdt}
          index={index}
          content={<ContentPdt />}
        />
      )}

      {trash && (
        <Fenetre
          closemenu={closemenu}
          content={<ContentTrash />}
          width={"500px"}
          closePdt={closeTrash}
          text={"Corbeille"}
          logo={trashlogo}
          hidewindow={hideTrash}
          index={index}
        />
      )}

      <div className="menuderoule_container">
        {menuderoule && (
          <Menuderoule setPostetravail={showPdt} setPaint={showPaint} />
        )}
      </div>
    </div>
  );
}

export default Main;
