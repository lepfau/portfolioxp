import React, {useState} from 'react'
import photopc from "../assets/pngordi.png"
import bios from "../assets/bios.gif"
import xpgif from "../assets/xploading.gif"
import bureaupng from "../assets/bureau.PNG"
import arrow from "../assets/arrow.png"

function Homepage(props) {

const {loading, xpload, bureau, blink, arroww} = props


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
            {arroww && <p className="indicationdem">Démarrer l'ordinateur</p>}
            {arroww && <img className="arrow" src={arrow}></img>} 
                </div>
    )
}

export default Homepage
