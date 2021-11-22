import React, { useState, useContext } from 'react'
import ironhack from "../../assets/ironhack.png"
import escem from "../../assets/escemlogo.png"
import wanli from "../../assets/wanli.png"
import LangContext from '../Context/LangContext'

function ContentFormations() {

const lang = useContext(LangContext);
const enTrue = lang.language === "English";

    const [showIron, setShowIron] = useState(false);
    const [showEscem, setShowEscem] = useState(false);
    const [showWanli, setShowWanli] = useState(false);

    return (
        <div className="mesformations_content" style={{marginTop:"15px"}}>
            
            <div className="mesimages_container" onMouseOver={() =>setShowIron(true)}
                onMouseLeave={() => setShowIron(false)} style={{cursor:"default"}}>
                <img 
                    className="pdt_drive3"
                    alt="drivepicture"
                    src={ironhack}
                    style={{height:"60px"}}
                />
                <p style={{ marginTop: "10px", fontWeight:"400" }}>
                   IronHack
                </p>
            </div>
            {showIron && <p className="mesformations_description">
                {enTrue ? "9 Week Bootcamp in Fullstack Web Developement" : "Bootcamp intensif de 9 semaines en développement web fullstack"}</p>}
           
            <div className="mesimages_container" style={{cursor:"default"}}
             onMouseOver={() =>setShowEscem(true)}
             onMouseLeave={() => setShowEscem(false)}
            >
                <img
                    className="pdt_drive3"
                    alt="drivepicture"
                    src={escem}
                />
                <p style={{ marginTop: "10px", fontWeight:"400"  }}>
                    ESCEM
                </p>
            </div>
            {showEscem && <p className="mesformations_description2">Master 2 Management & Marketing</p>}
        
            <div className="mesimages_container" style={{cursor:"default"}}
             onMouseOver={() =>setShowWanli(true)}
             onMouseLeave={() => setShowWanli(false)}
            >
                <img
                    className="pdt_drive3"
                    alt="drivepicture"
                    src={wanli}
                    style={{height:"60px"}}
                />
                <p style={{ marginTop: "10px", fontWeight:"400"  }}>
                    Ningbo Wanli University
                </p>
            </div>
            {showWanli && <p className="mesformations_description3">{enTrue ? "Exchange Semester in Ningbo, China" : "Semestre d'échange en Master à Ningbo, Chine"}</p>}
        </div>
    )
}

export default ContentFormations