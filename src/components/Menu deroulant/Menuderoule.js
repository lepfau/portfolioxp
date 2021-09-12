import React, { useState } from "react";
import Fenetre from "../Fenetres/Fenetre";
import photoed from "../../assets/photoed.PNG";
import logointernet from "../../assets/internetlogo.png";
import TopMenuItem from "../Menu deroulant/TopMenuItem";
import MiddleMenuItem from "../Menu deroulant/MiddleMenuItem";
import RightTopMenu from "../Menu deroulant/RightTopMenu";
import postetravail from "../../assets/5131-tOo-Postedetravail.png";

function Menuderoule(props) {
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
            secondtext={"Me contacter"}
            showWindow={props.showWindow}
          />
          <div class="fade_rule"></div>
          <MiddleMenuItem
            picture={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYaWMh4FOpU2v52g1VVqj7Rn-CR9JjLUErDdQ6KBSIVwU6ZqB2ySPVl2TRjLVCcFXtbE&usqp=CAU"
            }
            text={"MSN Explorer"}
          />
          <MiddleMenuItem
            picture={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvv7j1N-bKqOST0LHtRF5ttHPN6jj7w50uu47XDeq98dKu3RJbQEfwldIN9u6KWKAjiTs&usqp=CAU"
            }
            text={"Windows Media Player"}
          />
          <MiddleMenuItem
            picture={
              "https://www.kindpng.com/picc/m/27-270400_windows-movie-maker-hd-png-download.png"
            }
            text={"Windows Movie Maker"}
          />
          <MiddleMenuItem
            picture={
              "https://i1.sndcdn.com/artworks-000078425043-oloazo-t500x500.jpg"
            }
            text={"Paint"}
            todo={props.setPaint}
          />
          <MiddleMenuItem
            picture={
              "https://img.favpng.com/13/5/9/microsoft-word-office-open-xml-document-computer-icons-computer-file-png-favpng-7SuhHUxg3rqzd8iAKkryFYKCy.jpg"
            }
            text={"Word"}
            todo={props.setPaint}
          />
          <div style={{ marginTop: "40px" }} class="fade_rule"></div>
        </div>

        <div className="menuderoule_rightpart">
          <RightTopMenu
            picture={
              "https://iconarchive.com/download/i95231/dtafalonso/modern-xp/ModernXP-16-Folder-Documents.ico"
            }
            text={"Mes Compétences"}
          />
          <RightTopMenu
            picture={
              "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-62-Folder-Images-icon.png"
            }
            text={"Mes Formations"}
          />
          <RightTopMenu
            picture={
              "https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-38-Folder-Music-icon.png"
            }
            text={"Mes Projets"}
            showWindow={props.showWindow}
          />

          <RightTopMenu
            picture={postetravail}
            text={"Poste de travail"}
            showWindow={props.showWindow}
          />
          <div class="fade_rule2"></div>
        </div>
      </div>

      <div className="menuderoule_footer"></div>

      {/* <p className="noselect">Menu windows</p>
      <p className="noselect" onClick={() => props.setPostetravail()}>
        Poste de travail
      </p> */}
    </div>
  );
}

export default Menuderoule;
