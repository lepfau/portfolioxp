import React from "react";
import pdtlogo from "../../assets/5131-tOo-Postedetravail.png";
import trashlogo from "../../assets/trash.png";

function Taskbar(props) {
  let logo = "";
  if (props.appname === "Poste de travail") logo = pdtlogo;
  if (props.appname === "Corbeille") logo = trashlogo;
  if (props.appname === "Mon Cv.pdf")
    logo =
      "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png";

  return (
    <div onClick={() => props.hideWindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={logo} alt="logotaskbar"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
