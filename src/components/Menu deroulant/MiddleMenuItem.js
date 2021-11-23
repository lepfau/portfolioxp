import React from "react";

function MiddleMenuItem(props) {

const action = (text) => {
  if(text === "Notepad") props.todo("Bloc-notes");
  else props.todo(text)
}

  return (
    <div className="menuderoule_items" onClick={() => action(props.text)}>
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
