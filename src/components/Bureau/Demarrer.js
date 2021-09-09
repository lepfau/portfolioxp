import React, { useState } from "react";
import logoxp from "../../assets/logoxp.png";

function Demarrer(props) {
  return (
    <div onClick={() => props.setmenu()} style={{ display: "flex" }}>
      <div className="demarrer">
        <img src={logoxp} alt="logo xp" className="logoxp"></img>
        <p className="noselect" style={{ cursor: "default" }}>
          démarrer
        </p>
      </div>
    </div>
  );
}

export default Demarrer;
