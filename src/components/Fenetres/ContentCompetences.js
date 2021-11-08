import React, { useState } from "react";

import backarrow from "../../assets/backarrow.png"

function ContentCompetences() {
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);


const putSelected = () => {
  setSelected(!selected);
  setSelected2(false)
}

const putSelected2 = () => {
  setSelected2(!selected2);
  setSelected(false)
}



  return (

    <div>
      <img style={{height:"39px", margin:"10px", padding:'5px'}}src={"https://images.all-free-download.com/images/graphiclarge/back_button_37286.jpg"} onClick={() => {setFrontEnd(false); setBackEnd(false)}}/>
        {!frontEnd && !backEnd && <div className="pdt_content2" >
   
   {selected ?
     <div style={{border: "1px dotted black", backgroundColor:"lightblue", }} className="pdt_fulldrive2" 
     onDoubleClick={() => setFrontEnd(true)} onClick={() => putSelected()}>
     <img
       className="pdt_drive"
       alt="drivepicture"
       src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
     />{" "}
     <p style={{ marginTop: "10px" }}>Front End</p>
   </div> :
   
   <div className="pdt_fulldrive2" onDoubleClick={() => setFrontEnd(true)} onClick={() => putSelected()}>
   <img
     className="pdt_drive"
     alt="drivepicture"
     src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
   />{" "}
   <p style={{ marginTop: "10px" }}>Front End</p>
 </div>
  }

{selected2 ?    <div className="pdt_fulldrive2" onClick={() => putSelected2()} style={{border: "1px dotted black", backgroundColor:"lightblue", }} onDoubleClick={() => setBackEnd(true)}>
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>Back End</p>
        </div> :
        
        <div className="pdt_fulldrive2" onClick={() => putSelected2()} onDoubleClick={() => setBackEnd(true)}>
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>Back End</p>
        </div>}

   
      </div>
      
      }

      {frontEnd && <div className="pdt_content" >
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>HTML</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>CSS</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>JavaScript</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>ReactJs</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://pbs.twimg.com/profile_images/1156268573137833984/5gdpZtDv.jpg"
        />{" "}
        <p style={{ marginTop: "10px" }}>ThreeJs</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="data:image/png;base64,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"
        />{" "}
        <p style={{ marginTop: "10px" }}>Axios</p>
 
      </div>
      </div>}

      {backEnd && <div className="pdt_content">
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>NodeJs</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="data:image/png;base64,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"
        />{" "}
        <p style={{ marginTop: "10px" }}>Express</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>MongoDB</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_bf0fb4cb7fe948c42f37ded73895638f/salesforce-heroku.png"
        />{" "}
        <p style={{ marginTop: "10px" }}>Heroku</p>
      </div>

      </div>}

    </div>
  );
}

export default ContentCompetences;
