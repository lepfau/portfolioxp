import React from 'react'
import ironhack from "../../assets/ironhack.png"
import escem from "../../assets/escem.png"

function ContentFormations() {

    return (
        <div className="pdt_content" style={{marginTop:"15px"}}>
            
            <div className="mesimages_container">
                <img
                    className="pdt_drive3"
                    alt="drivepicture"
                    src={ironhack}
                />
                <p style={{ marginTop: "10px" }}>
                   IronHack
                </p>
            </div>
           
            <div className="mesimages_container">
                <img
                    className="pdt_drive3"
                    alt="drivepicture"
                    src={escem}
                />
                <p style={{ marginTop: "10px" }}>
                    ESCEM
                </p>
            </div>
        
        </div>
    )
}

export default ContentFormations