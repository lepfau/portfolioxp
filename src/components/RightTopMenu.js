import React from "react";

function RightTopMenu(props) {
  return (
    <div className="menuderoule_items_topright" onClick={() => props.todo()}>
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
