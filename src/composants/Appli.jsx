import "./Appli.css";
import logo from "../images/logo.png";
import Menu from "./Menu";
// On importe les textes statiques pour la "localisation" (l12n)
import l12n from "../localisation/textes-statiques.json";
import { useEffect, useState } from "react";
import SEO from "./SEO";

export default function Appli() {
  /*    
    Ajoutez ici un état pour la langue choisie par l'utilisateur. 
    Par défaut, on peut supposer que c'est le français ("fr").
  /*


  /*
    Utilisez le hook "useEffect" pour faire les changements nécessaires au 
    niveau du document HTML (lang, title, meta description, et noscript) en 
    fonction de la langue choisie par l'utilisateur.
  */
  const [langue, setLangue] = useState(() => {
    if (localStorage.getItem("langue")) {
      return localStorage.getItem("langue");
    } else {
      return "fr";
    }
  });

  useEffect(() => {
    localStorage.setItem("langue", langue);
  }, [langue]);

  return (
    <div className="Appli">
      <SEO l12n={l12n} langue={langue}></SEO>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3>Café rouge</h3>
          {/*
            Adaptez ce code (et tout code similaire) pour prendre en 
            compte le choix de langue fait par l'utilisateur.
            
            Les chaînes de textes correspondants à ces variables se trouvent  
            dans le fichier "localisation/textes-statiques.json" 
          */}
          <h5>{l12n.entete.amorce[langue]}</h5>
        </div>
        {/* Ajoutez les gestionnaires d'événements adéquats pour changer la 
        langue du site... */}
        <div className="choix-langue">
          <span
            onClick={() => {
              setLangue("fr");
            }}
            className={langue == "fr" ? "actif" : ""}
          >
            fr
          </span>
          <span
            onClick={() => {
              setLangue("en");
            }}
            className={langue == "en" ? "actif" : ""}
          >
            en
          </span>
        </div>
      </header>
      <Menu l12n={l12n} langue={langue} />
      <footer>
        <div className="adresse">{l12n.p2p.adresse[langue]}</div>
        <div className="tel">+1 (321) 987 6543</div>
      </footer>
    </div>
  );
}
