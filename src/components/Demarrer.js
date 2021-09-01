import React, { useState } from "react";

function Demarrer(props) {
  return (
    <div
      onClick={() => props.setmenu()}
      style={{ display: "flex", height: "20px", alignSelf: "flex-end" }}
    >
      <div className="demarrer">
        <p className="noselect" style={{ cursor: "default" }}>
          Démarrer
        </p>
      </div>
    </div>
  );
}

export default Demarrer;
