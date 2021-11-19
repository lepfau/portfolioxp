import React from "react";

function TopMenuItem(props) {

const showWindowLang = (text) => {
  if(text === "Contact Me") {
    props.showWindow("Me contacter")
  }
  else if(text === "Internet Explorer") {
    props.showWindow("Internet Explorer")
  }
  else props.showWindow(text)
}

  return (
    <div
      className="menuderoule_items"
      onClick={() => showWindowLang(props.secondtext)}
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
