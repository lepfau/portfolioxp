import React from "react";

function MiddleMenuItem(props) {
  return (
    <div className="menuderoule_items" onClick={() => props.todo(props.text)}>
      <div className="piccontainermenu">
        <img className="menuderoule_items_pic" src={props.picture}></img>
      </div>
      <div className="menuderoule_items_text">
        <p className="menuderoule_items_singletext ">{props.text}</p>
      </div>
    </div>
  );
}

export default MiddleMenuItem;
