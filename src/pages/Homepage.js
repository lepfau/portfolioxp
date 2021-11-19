import React, {useState, useContext} from 'react'
import photopc from "../assets/pngordi.png"
import bios from "../assets/bios.gif"
import xpgif from "../assets/xploading.gif"
import bureaupng from "../assets/bureau.PNG"
import arrow from "../assets/arrow.png"
import LangContext from "../components/Context/LangContext"
import frenchflag from "../assets/frenchflag.png"
import englishflag from "../assets/englishflag.png"

function Homepage(props) {

const {loading, xpload, bureau, blink, arroww} = props
const lang = useContext(LangContext);

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p className="start-btn" onClick={() => props.gifShowing()}>"X"</p>
            {blink && <div class="blink_me3">.</div>}
            {blink && <div class="blink_me2">.</div>}
            {blink && <div class="blink_me">.</div>}
            <img className="photopc" src={photopc}></img>
            <div class="eteint"></div>
            {loading &&  <img className="bios" src={bios}></img>}
            {xpload && <img className="xploading" src={xpgif}></img> }
            {bureau && <img className="bureau" src={bureaupng}></img>}
            <div style={{position: "absolute"}}>
            <img src={frenchflag} className="frenchflag" onClick={() => lang.changeLanguageFr()}/>
            <img src={englishflag}  className="englishflag" onClick={() => lang.changeLanguageEn()}/>
            <p style={{zIndex: "999",width:"150px",position:"absolute", marginTop:"3vh", marginLeft:'52vh', fontFamily:"Roboto", fontWeight:"800", fontSize:'16px'}}>Choose language</p>
            </div>
           {arroww && <p className="indicationdem"> {lang.language === "English" ? "Start" : "Démarrer l'ordinateur" }</p>}
            {arroww && <img className="arrow" src={arrow}></img>} 
                </div>
    )
}

export default Homepage
