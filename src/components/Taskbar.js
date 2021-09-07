import React from "react";

function Taskbar(props) {
  let logo = "";
  if (props.appname === "Poste de travail") logo = props.pdtlogo;
  if (props.appname === "Corbeille") logo = props.trashlogo;

  return (
    <div onClick={() => props.hidewindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={logo} alt="petiteiii"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
