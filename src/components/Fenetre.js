import React from "react";

function Fenetre(props) {
  return (
    <div className="fenetre">
      <p className="noselect" onClick={() => props.closePdt()}>
        X
      </p>
    </div>
  );
}

export default Fenetre;
