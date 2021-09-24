import React from "react";
import pickit from "../../assets/pickit.PNG";
import supertyper from "../../assets/supertyper.png";
import myface from "../../assets/photoed.PNG"

function ContentProjets() {
  return (
    <div className="pdt_content">
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://raw.githubusercontent.com/lepfau/instagreen-client/master/public/favicon.ico"
        />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://instagreeno.herokuapp.com"
          target="_blank"
          alt="link"
          rel="noreferrer"
        >
          Instagreen
        </a>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src={myface}
        />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://lepfau.github.io/testface"
          target="_blank"
          alt="link"
          rel="noreferrer"
        >
          Face anim
        </a>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://raw.githubusercontent.com/lepfau/recipeflix-client/master/public/favicon.ico"
        />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://recipe-flix.herokuapp.com"
          target="_blank"
          alt="link"
          rel="noreferrer"
        >
          Recipeflix
        </a>
      </div>
      <div className="pdt_fulldrive">
        <img className="pdt_drive" alt="drivepicture" src={supertyper} />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://lepfau.github.io/Project-1/
"
          alt="link"
          rel="noreferrer"
          target="_blank"
        >
          Super Typer 2077
        </a>
      </div>
      <div className="pdt_fulldrive">
        <img className="pdt_drive" alt="drivepicture" src={pickit} />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://iron-hack-project-2.herokuapp.com/
"
          alt="link"
          rel="noreferrer"
          target="_blank"
        >
          Pickit!
        </a>
      </div>
    </div>
  );
}

export default ContentProjets;
