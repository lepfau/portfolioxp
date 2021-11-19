import React, {useContext} from 'react'
import LangContext from '../Context/LangContext'

function ContentPopup() {

    const lang = useContext(LangContext);
    const enTrue = lang.language === "English";
    return (
        <div className="popup">
            <div className="popup_inside">
            <h2 className="popup_title">{enTrue ? 'Meet hot developers in your area' : 'Rencontre les developpeurs chauds de ta region'} </h2>
            <h3 className="popup_content">{enTrue ? 'Call NOW' : 'APPELLE MAINTENANT'}</h3>
            <h3 className="popup_number">+336.02.38.20.94</h3>
            </div>
        </div>
    )
}

export default ContentPopup
