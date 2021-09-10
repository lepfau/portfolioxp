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
  if (props.appname === "Mes Projets")
    logo =
      "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png";
  if (props.appname === "Me contacter")
    logo =
      "https://upload.wikimedia.org/wikipedia/fr/5/53/Outlook_express_logo-200-200.jpg";

  return (
    <div onClick={() => props.hideWindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={logo} alt="logotaskbar"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
