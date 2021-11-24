import React, { useState, useContext } from 'react'
import photopc from "../assets/pngordi.png"
import bios from "../assets/bios.gif"
import xpgif from "../assets/xploading.gif"
import bureaupng from "../assets/bureau.PNG"
import arrow from "../assets/arrow.png"
import LangContext from "../components/Context/LangContext"
import frenchflag from "../assets/frenchflag.png"
import englishflag from "../assets/englishflag.png"

function Homepage(props) {

    const { loading, xpload, bureau, blink, arroww } = props
    const lang = useContext(LangContext);
    const [french, setFrench] = useState(true);
    const [eng, setEng] = useState(false);
    const [flags, setFlags] = useState(true)

    const languageFrench = () => {
        lang.changeLanguageFr();
        setEng(false);
        setFrench(true);
    }

    const languageEng = () => {
        lang.changeLanguageEn();
        setFrench(false);
        setEng(true);
    }

    const startup = () => {
        setFlags(false)
        props.gifShowing();
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p className="start-btn" onClick={() => startup()}>"X"</p>
            {blink && <div class="blink_me3">.</div>}
            {blink && <div class="blink_me2">.</div>}
            {blink && <div class="blink_me">.</div>}
            <img className="photopc" src={photopc} alt="pcpicture"></img>
            <div class="eteint"></div>
            {loading && <img className="bios" src={bios} alt="biosgif"></img>}
            {xpload && <img className="xploading" src={xpgif} alt="xploading gif"></img>}
            {bureau && <img className="bureau" src={bureaupng} alt="bureau xp"></img>}
            <div style={{ position: "absolute" }}>
                {flags && (
                    <div >
                        <img src={frenchflag} alt="french flag" className={french ? 'frenchflag_selected' : 'frenchflag'} onClick={() => languageFrench()} />
                        <img src={englishflag} alt="english flag" className={eng ? 'englishflag_selected' : 'englishflag'} onClick={() => languageEng()} />
                    </div>
                )}
            </div>
            {arroww && <p className="indicationdem" onClick={() => startup()} style={{ cursor: "pointer" }}> {lang.language === "English" ? "Start computer" : "Démarrer l'ordinateur"}</p>}
            {arroww && <img alt="arrow" className="arrow" src={arrow}></img>}
        </div>
    )
}

export default Homepage
