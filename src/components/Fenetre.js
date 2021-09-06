import React from "react";
import Draggable from "react-draggable";

function Fenetre(props) {
  return (
    <Draggable>
      <div className="window" style={{ width: "300px" }}>
        <div className="title-bar">
          <div className="title-bar-text">
            <img className="fenetre_topbar_image" src={props.logo} />
            {props.text}
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button
              aria-label="Close"
              onClick={() => props.closePdt()}
            ></button>
          </div>
        </div>
        <div className="window-body">
          <p>There's so much room for activities!</p>
        </div>
      </div>
    </Draggable>

    // <Draggable>
    //   <div className="fenetre">
    //     <div className="fenetre_topbar">
    //       <div className="fenetre_topbar_left">
    //         <img className="fenetre_topbar_image" src={props.logo} />
    //         <p>{props.text}</p>
    //       </div>

    //       <div className="fenetre_topbar_buttons">
    //         <div className="fenetre_topbar_but"></div>
    //         <div className="fenetre_topbar_but"></div>
    //         <p className="noselect" onClick={() => props.closePdt()}>
    //           X
    //         </p>
    //       </div>
    //     </div>
    //     <div className="fenetre_content"></div>
    //   </div>
    // </Draggable>
  );
}

export default Fenetre;
