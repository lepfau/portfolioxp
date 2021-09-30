import React from "react";
import pdtlogo from "../../assets/5131-tOo-Postedetravail.png";
import trashlogo from "../../assets/trash.png";
import logointernet from "../../assets/internetlogo.png";

function Taskbar(props) {
  let logo = "";
  if (props.appname === "Poste de travail") logo = pdtlogo;
  if (props.appname === "Corbeille") logo = trashlogo;
  if (props.appname === "Mes Images") logo = "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"
  if (props.appname === "Mes Formations") logo = "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"
  if (props.appname === "Mon Cv.pdf")
    logo =
      "https://seeklogo.com/images/A/adobe-pdf-logo-1480D328A9-seeklogo.com.png";
  if (props.appname === "Mes Projets")
    logo =
      "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png";
  if (props.appname === "Me contacter")
    logo =
      "https://upload.wikimedia.org/wikipedia/fr/5/53/Outlook_express_logo-200-200.jpg";

  if (props.appname === "Mes Compétences")
  logo = "https://iconarchive.com/download/i95231/dtafalonso/modern-xp/ModernXP-16-Folder-Documents.ico"
  if (props.appname === "Internet Explorer")
    logo = logointernet
  if (props.appname === "Popup")
    logo = logointernet
    if(props.appname === "Piano")
    logo = "https://www.pngrepo.com/png/38467/512/piano-top-view.png"
  return (
    <div onClick={() => props.hideWindow(props.window)} className="classbar">
      <img className="taskbarlogo" src={logo} alt="logotaskbar"></img>
      {props.appname}
    </div>
  );
}

export default Taskbar;
