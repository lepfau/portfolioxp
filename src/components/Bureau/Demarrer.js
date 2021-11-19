import React, { useState, useContext } from "react";
import logoxp from "../../assets/logoxp.png";
import LangContext from "../Context/LangContext";

function Demarrer(props) {
  const lang = useContext(LangContext);

  return (
    <div onClick={() => props.setmenu()} style={{ display: "flex" }}>
      <div className={lang.language === "English" ? 'demarreren' : 'demarrer'}>
        <img src={logoxp} alt="logo xp" className="logoxp"></img>
        <p className="noselect" style={{ cursor: "default" }}>
         {lang.language === "English" ? "start" : "démarrer"}
        </p>
      </div>
    </div>
  );
}

export default Demarrer;
