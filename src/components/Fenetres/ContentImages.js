import React from 'react'
import hopper from "../../assets/hooper.png"
import space from "../../assets/space.png"
import kitchen from "../../assets/kitchen.png"
import sea from "../../assets/sea.gif"
import appart from "../../assets/appart.png"

function ContentImages() {

    return (
        <div className="pdt_content" style={{marginTop:"15px"}}>
            
            <div className="mesimages_container">
                <img
                    className="pdt_drive2"
                    alt="drivepicture"
                    src={hopper}
                />
                <p style={{ marginTop: "10px" }}>
                    Hopper.jpeg
                </p>
            </div>
           
            <div className="mesimages_container">
                <img
                    className="pdt_drive2"
                    alt="drivepicture"
                    src={space}
                />
                <p style={{ marginTop: "10px" }}>
                    Space.jpeg
                </p>
            </div>

            <div className="mesimages_container">
                <img
                    className="pdt_drive2"
                    alt="drivepicture"
                    src={kitchen}
                />
                <p style={{ marginTop: "10px" }}>
                    Cuisine.jpeg
                </p>
            </div>

            <div className="mesimages_container">
                <img
                    className="pdt_drive2"
                    alt="drivepicture"
                    src={sea}
                />
                <p style={{ marginTop: "10px" }}>
                    sea.gif
                </p>
            </div>

            <div className="mesimages_container">
                <img
                    className="pdt_drive2"
                    alt="drivepicture"
                    src={appart}
                />
                <p style={{ marginTop: "10px" }}>
                    appart.jpeg
                </p>
            </div>
        
        </div>
    )
}

export default ContentImages
