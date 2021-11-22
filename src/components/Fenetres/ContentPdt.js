import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import Face from "../Face";

function ContentPdt() {

  const lang = useContext(LangContext)
  const enTrue = lang.language === "English"
  return (
    <div className="aboutme">
      <h1 className="aboutme_title">{enTrue ? 'About me' : 'À propos de moi'}</h1>
      <hr></hr><br/>
      <p>
        {enTrue ? 'After a degree in management and marketing and 5 years in different marketing and sales positions, I decided to take a turn in my career in 2020 for new challenges.': "Après un master en management et marketing et 5 années dans différentes entreprises entre positions sales et marketing, j'ai décidé de me lancer dans une reconversion en 2020 à la recherche de nouveaux challenges."}
         </p>
        <br/>

        <p>{enTrue ? "I always had an appetite for the IT world, web development appeared obvious to me; I find the field passionating and I really enjoy learning more everyday." : "Ayant toujours eu un appétit pour le monde informatique, le développement web m'est apparu comme une évidence; C'est un univers que je trouve passionant et je me satisfait d'en apprendre plus chaque jour."}
        </p>
<p>
  <br/>
  {enTrue ? "After a successful 9 week intensive bootcamp at IronHack and building my skills trough personal projects, I am looking today for a company that would accompanied me and help me finalize my professional transition"
: "Après un bootcamp intensif de 9 semaines chez IronHack et avoir fait évoluer mes compétences au travers de projets personels, je recherche aujourd'hui une entreprise qui pourra m'accompagner et finaliser ma reconversion. "}
</p>
      <br />
    </div>
  );
}

export default ContentPdt;
