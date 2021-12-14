import React, {useContext} from "react";
import pickit from "../../assets/pickit.PNG";
import supertyper from "../../assets/supertyper.png";
import myface from "../../assets/photoed.PNG"
import LangContext from "../Context/LangContext";


function ContentProjets() {

  const lang = useContext(LangContext)

  return (
    <div>
      <div className="projets_headbar">
        <p style={{width:"31%", marginLeft:"12px"}}>{lang.language === "English" ? "Name" : "Nom"}</p>
        <p style={{width:"35%"}}>Technos</p>
        <p>{lang.language === "English" ? "Date created" : "Date création"}</p>
      </div>
    <div className="pdt_content_projets">
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img
          className="pdt_drive_projets"
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
      <div style={{width:"35%"}}> <p>React, Express, MongoDB</p></div>
      
     <div style={{width:"22%"}}> <p>Janvier 2021</p></div> 
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img
          className="pdt_drive_projets"
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
      <div style={{width:"35%"}}> <p>React, ThreeJs, Blender</p></div>
      
      <div style={{width:"22%"}}> <p>Août 2021</p></div> 
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img
          className="pdt_drive_projets"
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
      <div style={{width:"35%"}}> <p>React, Express, MongoDB</p></div>
      
      <div style={{width:"22%"}}> <p>Avril 2021</p></div> 
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img className="pdt_drive_projets" alt="drivepicture" src="https://i.pinimg.com/originals/dc/1f/5a/dc1f5a697d31de36519e43fa58d38485.gif" />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://edbasicchat.herokuapp.com
"
          alt="link"
          rel="noreferrer"
          target="_blank"
        >
          Run!Run!Run!
        </a>
      </div>
      <div style={{width:"35%"}}> <p>HTML, CSS, JS, Socket.io</p></div>

      <div style={{width:"22%"}}> <p>Novembre 2021</p></div> 
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img className="pdt_drive_projets" alt="drivepicture" src={supertyper} />{" "}
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
      <div style={{width:"35%"}}> <p>HTML, CSS, JS</p></div>
      


      <div style={{width:"22%"}}> <p>Novembre 2020</p></div> 
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="pdt_fulldrive_projets">
        <img className="pdt_drive_projets" alt="drivepicture" src={pickit} />{" "}
        <a
          style={{ marginTop: "10px" }}
          href="https://pickitapp.herokuapp.com/
"
          alt="link"
          rel="noreferrer"
          target="_blank"
        >
          Pickit!
        </a>
      </div>
      <div style={{width:"35%"}}> <p>HBS, Express, MongoDB</p></div>
      
      <div style={{width:"22%"}}> <p>Decembre 2020</p></div> 
      </div>
    </div>
    </div>
  );
}

export default ContentProjets;
