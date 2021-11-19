



import React, {useContext} from "react";
import LangContext from "../Context/LangContext";
import Face from "../Face";

function ContentPdt() {

  const lang = useContext(LangContext)
  return (
    <div className="pdt_content">
    
      
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
        />{" "}
        <p>{lang.language === "English" ? 'Skills(C:)' : 'Compétences(C:)'}</p>
      </div>
      <div className="pdt_fulldrive">
        <img
          className="pdt_drive"
          alt="drivepicture"
          src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-60-Disk-icon.png"
        />{" "}
        <p>{lang.language === "English" ? 'Education(D:)' : 'Formation(D:)'}</p>
      </div>
    </div>
  );
}

export default ContentPdt;
