import React from "react";
import Trash from "../components/Trash";
import Fenetre from "../components/Fenetre";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";
import postetravail from "../assets/5131-tOo-Postedetravail.png";

function WindowsArea(props) {
  return (
    <div className="windows_all">
      {props.trash && (
        <Fenetre
          closemenu={props.closemenu}
          content={<ContentTrash />}
          width={"550px"}
          closePdt={props.closeTrash}
          text={"Corbeille"}
          logo={props.trashlogo}
          hidewindow={props.hideTrash}
          index={props.index2}
        />
      )}

      {props.posteTravail && (
        <Fenetre
          closemenu={props.closemenu}
          closePdt={props.closePdt}
          width={"800px"}
          text={"Poste de travail"}
          logo={postetravail}
          hidewindow={props.hidePdt}
          index={props.index1}
          content={<ContentPdt />}
        />
      )}

      <div className="icones">
        <Trash
          showtrash={props.showTrash}
          trashselect={props.trashselection}
          trashboole
          an={props.trashselect}
        />
      </div>
    </div>
  );
}

export default WindowsArea;
