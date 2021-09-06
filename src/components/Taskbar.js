import React from "react";

function Taskbar(props) {
  return (
    <div onClick={() => props.hidewindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={props.image} alt="petiteiii"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
