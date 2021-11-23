import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import Face from "../Face";

function ContentPdt() {

  const lang = useContext(LangContext)
  const enTrue = lang.language === "English"
  return (
    <h1>
{enTrue ? 'Not available for now' : 'Non disponible pour le moment'}
</h1>
  );
}

export default ContentPdt;
