import React from "react";

function Taskbar(props) {
  let logo = "";
  if (props.appname === "Poste de travail") logo = props.pdtlogo;
  if (props.appname === "Corbeille") logo = props.trashlogo;
  if (props.appname === "Mon Cv.pdf")
    logo =
      "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png";

  return (
    <div onClick={() => props.hideWindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={logo} alt="petiteiii"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
