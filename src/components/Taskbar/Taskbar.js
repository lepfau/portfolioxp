import React, {useContext} from "react";
import pdtlogo from "../../assets/5131-tOo-Postedetravail.png";
import trashlogo from "../../assets/trash.png";
import logointernet from "../../assets/internetlogo.png";
import LangContext from "../Context/LangContext";
import notepadlogo from "../../assets/Notepad_Vista_10.png"

function Taskbar(props) {

  const lang = useContext(LangContext)
  let nametouse = props.appname;
let englishTrue = lang.language === "English";

  if (nametouse === "Poste de travail" && englishTrue ) nametouse = "Computer";
  else if (nametouse === "Mes Projets" && englishTrue) nametouse = "My Projects";
  else if (nametouse === "Mes Images" && englishTrue) nametouse = "My Pictures";
  else if (nametouse === "Bloc-notes" && englishTrue) nametouse = "Notepad";
  else if (nametouse === "Mes Compétences" && englishTrue) nametouse = "My Skills";
  else if (nametouse === "Mes Formations" && englishTrue) nametouse = "My Education";
  else if (nametouse === "Corbeille" && englishTrue) nametouse = "Trash";
  else if (nametouse === "Mon Cv.pdf" && englishTrue) nametouse = "Resume.pdf";
  else if (nametouse === "Me contacter" && englishTrue) nametouse = "Contact Me";
  



  let logo = "";
  if (props.appname === "Poste de travail") logo = pdtlogo;
  if (props.appname === "Bloc-notes") logo = notepadlogo;
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
      {nametouse}
    </div>
  );
}

export default Taskbar;
