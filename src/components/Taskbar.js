import React from "react";

function Taskbar(props) {
  return (
    <div onClick={() => props.hidewindow()} className="classbar">
      {props.appname}
    </div>
  );
}

export default Taskbar;
