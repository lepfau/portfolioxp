import React from "react";
import Trash from "../components/Trash";
import Fenetre from "../components/Fenetre";
import ContentPdt from "../components/ContentPdt.js";
import ContentTrash from "../components/ContentTrash";
import postetravail from "../assets/5131-tOo-Postedetravail.png";

function WindowsArea(props) {
  return (
    <div className="windows_all" onClick={() => props.closemenu()}>
      {props.windowArray.map((window) => {
        if (window === "Poste de travail" && props.posteTravail === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closemenu={props.closemenu}
              closePdt={props.closePdt}
              width={"700px"}
              text={"Poste de travail"}
              logo={postetravail}
              hidewindow={props.hidePdt}
              index={props.index1}
              content={<ContentPdt />}
            />
          );
        else if (window === "Corbeille" && props.trash === true)
          return (
            <Fenetre
              putOnTop={props.putOnTop}
              key={window}
              closemenu={props.closemenu}
              content={<ContentTrash />}
              width={"550px"}
              closePdt={props.closeTrash}
              text={"Corbeille"}
              logo={props.trashlogo}
              hidewindow={props.hideTrash}
              index={props.index2}
            />
          );
      })}

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
