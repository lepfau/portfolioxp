import React, { useState, useContext } from "react";
import Fenetre from "../Fenetres/Fenetre";
import photoed from "../../assets/photoed.PNG";
import logointernet from "../../assets/internetlogo.png";
import TopMenuItem from "../Menu deroulant/TopMenuItem";
import MiddleMenuItem from "../Menu deroulant/MiddleMenuItem";
import RightTopMenu from "../Menu deroulant/RightTopMenu";
import postetravail from "../../assets/5131-tOo-Postedetravail.png";
import githublogo from "../../assets/github.png"
import linkedinlogo from "../../assets/linkedin-icon-png.png"
import logoout from "../../assets/logout.png"
import shudownlogo from "../../assets/shutdown.png"
import LangContext from "../Context/LangContext";

function Menuderoule(props) {

  const lang = useContext(LangContext)

  function openGithub() {
    window.open("https://www.github.com/lepfau");
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/in/edouard-pfauwadel/")
  }

  return (
    <div className="menuderoule">
      <div className="menuderoule_header">
        <img src={photoed} alt="photode profil" className="profilepic"></img>
        <p className="namemenu">Edouard Pfauwadel</p>
      </div>

      <div className="menuderoule_middle">
        <div className="menuderoule_leftpart">
          <TopMenuItem
            picture={logointernet}
            firsttext={"Internet"}
            secondtext={"Internet Explorer"}
            showWindow={props.showWindow}
          />
          <TopMenuItem
            picture={
              "https://upload.wikimedia.org/wikipedia/fr/5/53/Outlook_express_logo-200-200.jpg"
            }
            firsttext={"E-mail"}
            secondtext={lang.language === "English" ? "Contact Me" : "Me contacter"}
            showWindow={props.showWindow}
          />
          <div class="fade_rule"></div>
          <MiddleMenuItem
            picture={
              githublogo
            }
            text={"Github"}
            todo={openGithub}
          />
          <MiddleMenuItem
            picture={
              linkedinlogo
            }
            text={"Linkedin"}
            todo={openLinkedin}
          />
          <MiddleMenuItem
            picture={
              "https://www.pngrepo.com/png/38467/512/piano-top-view.png"
            }
            text={"Piano"}
            todo={props.showWindow}
          />
          <MiddleMenuItem
            picture={
              "https://i1.sndcdn.com/artworks-000078425043-oloazo-t500x500.jpg"
            }
            text={"Paint"}
       
          />
          <MiddleMenuItem
            picture={
              "https://img.favpng.com/13/5/9/microsoft-word-office-open-xml-document-computer-icons-computer-file-png-favpng-7SuhHUxg3rqzd8iAKkryFYKCy.jpg"
            }
            text={"Word"}
           
          />
          <div style={{ marginTop: "40px" }} class="fade_rule"></div>
        </div>

        <div className="menuderoule_rightpart">
          <RightTopMenu
            picture={
              "https://iconarchive.com/download/i95231/dtafalonso/modern-xp/ModernXP-16-Folder-Documents.ico"
            }
            text={lang.language === "English" ? "My Skills" : "Mes Compétences"}
            showWindow={props.showWindow}
          />
          <RightTopMenu
            picture={
              "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"
            }
            text={lang.language === "English" ? "My Education" : "Mes Formations"}
            showWindow={props.showWindow}
          />
          <RightTopMenu
            picture={
              "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png"
            }
            text={lang.language === "English" ?"My Projects" : "Mes Projets"}
            showWindow={props.showWindow}
          />
          <RightTopMenu
            picture={
              "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"
            }
            text={lang.language === "English" ? "My Pictures" : "Mes Images"}
            showWindow={props.showWindow}
          />

          <RightTopMenu
            picture={postetravail}
            text={lang.language === "English" ? "Computer" : "Poste de travail"}
            showWindow={props.showWindow}
          />
          <div class="fade_rule2"></div>
        </div>
      </div>

      <div className="menuderoule_footer">
     
        <div className={lang.language === "English" ? "footer_element2_en" : "footer_element2"}>  <img className="footer_image" src={logoout}
          alt="logoutlogo"/>          <p>{lang.language === "English" ? "Log Off" : "Fermer la session"}</p>
        
        </div>
        <div onClick={() => props.shutdown()} className={lang.language === "English" ? "footer_element_en" : "footer_element"}>
          <img className="footer_image" src={shudownlogo} 
          alt="shutdownlogo"/>
          <p>{lang.language === "English" ? 'Shut Down' : 'Arrêter'}</p>
        </div>
      </div>

      {/* <p className="noselect">Menu windows</p>
      <p className="noselect" onClick={() => props.setPostetravail()}>
        Poste de travail
      </p> */}
    </div>
  );
}

export default Menuderoule;
