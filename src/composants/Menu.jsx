import "./Menu.css";
import menuIconPlats from "../images/menu_icon_plats.png";
import Plat from "./Plat";
import { useEffect, useState } from "react";
import * as mMenu from "../firebase/menu-modele";

export default function Menu({ l12n, langue }) {
  /*
    Utiliser un hook d'état pour stocker les plats du menu qui seront récupérés 
    de Firestore. 
  */

  /*
    Utiliser le hook "useEffect" pour faire la récupération des plats à partir 
    de Firestore.
  */

  const [plats, setPlats] = useState([]);

  useEffect(() => {
    async function loadMenu() {
      const menuData = await mMenu.getMenu();
      setPlats(menuData);
      console.log(plats);
    }
    loadMenu();
  }, [l12n]);

  return (
    <div className="Menu">
      <div className="titre">
        <img alt={l12n.menu.entrees[langue]} src={menuIconPlats} />
        <p>{l12n.menu.entrees[langue]}</p>
      </div>

      {/* 
          Vous devez générer dynamiquement l'affichage des plats à partir de 
          Firestore. Donc vous retirez le code statique ci-dessous et remplacez 
          avec votre code dynamique...
        */}
      {plats.map((i) => {
        return <Plat nom={i.nom[langue]} prix={i.prix} key={i.id}></Plat>;
      })}
      {/* <Plat
        nom="Rouleau de printemps, smoked-meat de MTL et crevettes"
        prix="15"
      />
      <Plat nom="Rouleaux impériaux de M. Wu (crevettes ou végé)" prix="9" />
      <Plat nom="Salade de papaye épicée" prix="13" /> */}
    </div>
  );
}
