import React, { useState } from "react";
import Menuderoule from "./Menuderoule";

function Demarrer() {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <div style={{ display: "flex", height: "20px" }}>
      <div onClick={() => showMenu()} className="demarrer">
        <p className="noselect" style={{ cursor: "default" }}>
          Démarrer
        </p>
      </div>
      {menu && <Menuderoule />}
    </div>
  );
}

export default Demarrer;
