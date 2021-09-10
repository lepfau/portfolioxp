import React from "react";

function TopMenuItem(props) {
  return (
    <div
      className="menuderoule_items"
      onClick={() => props.showWindow(props.secondtext)}
    >
      <img className="menuderoule_items_pic" src={props.picture}></img>
      <div className="menuderoule_items_text">
        <p className="menuderoule_items_singletext bold">{props.firsttext}</p>
        <p className="menuderoule_items_singletext grey">{props.secondtext}</p>
      </div>
    </div>
  );
}

export default TopMenuItem;
