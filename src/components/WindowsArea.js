import React from "react";
import Trash from "../components/Trash";

import Fenetre from "../components/Fenetre";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";

import trashlogo from "../assets/trash.png";
import postetravail from "../assets/5131-tOo-Postedetravail.png";

function WindowsArea(props) {
  return (
    <div onClick={() => props.closemenu()} className="windows_all">
      <Trash
        showtrash={props.showTrash}
        trashselect={props.trashselection}
        trashboolean={props.trashselect}
      />

      {props.posteTravail && (
        <Fenetre
          closemenu={props.closemenu}
          closePdt={props.closePdt}
          width={"550px"}
          text={"Poste de travail"}
          logo={postetravail}
          hidewindow={props.hidePdt}
          index={props.index}
          content={<ContentPdt />}
        />
      )}

      {props.trash && (
        <Fenetre
          closemenu={props.closemenu}
          content={<ContentTrash />}
          width={"550px"}
          closePdt={props.closeTrash}
          text={"Corbeille"}
          logo={props.trashlogo}
          hidewindow={props.hideTrash}
          index={props.index}
        />
      )}
    </div>
  );
}

export default WindowsArea;
