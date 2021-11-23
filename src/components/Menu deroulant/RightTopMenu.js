import React from "react";

function RightTopMenu(props) {

const showWindowLang = (text) => {
  if(text === "Computer") {
    props.showWindow("Poste de travail")
  }
  else if (text === "My Projects") {
    props.showWindow("Mes Projets")
  }
  else if (text === "My Pictures") {
    props.showWindow("Mes Images")
  }
  else if (text === "My Skills") {
    props.showWindow("Mes Compétences")
  }
  else if (text === "E-mail") {
    props.showWindow("E-mail")
  }
  else if (text === "My Education") {
    props.showWindow("Mes Formations")
  }
  else if (text === "Internet Explorer") {
    props.showWindow("Internet Explorer")
  }
  else if (text === "Notepad") {
    props.showWindow("Bloc-notes")
  }
  else props.showWindow(props.text)
}

  return (
    <div
      className="menuderoule_items_topright"
      onClick={() => showWindowLang(props.text)}
    >
      <div className="piccontainermenu">
        <img className="menuderoule_items_picsmall" src={props.picture}></img>
      </div>
      <div className="menuderoule_items_text_righttop">
        <p className="menuderoule_items_singletext ">{props.text}</p>
      </div>
    </div>
  );
}

export default RightTopMenu;
