import React, { useState } from "react";
import Fenetre from "./Fenetre";

function Menuderoule(props) {
  return (
    <div className="menuderoule">
      <p className="noselect">Menu windows</p>
      <p className="noselect" onClick={() => props.setPostetravail()}>
        Poste de travail
      </p>
    </div>
  );
}

export default Menuderoule;
