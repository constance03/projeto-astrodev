import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import endurance from "./assets/endurance.jpeg";
import axiom from "./assets/axiom.jpeg";
import jupiter2 from "./assets/jupiter2.png";
import milano from "./assets/milano.jpg";
import orion from "./assets/orion.jpeg";
import rickmorty from "./assets/rick-morty.jpeg";
import Router from "./routes/Router";

function App() {
  // Creating states to use on the components and pages
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartComponents, setCartComponents] = useState({
    divCart: false,
    badge: false,
  });
  const [filter, setFilter] = useState({
    filterName: "",
    filterMaxValue: "",
    filterMinValue: "",
    order: "",
  });

  // Creating the array of objects to use on the website
  const spaceTravels = [
    {
      id: 1,
      destination: "Marte",
      description:
        "Aproveite uma pernoite no planeta vermelho. Voe de classe executiva e conheça as principais áreas de Marte. Valor por pessoa.",
      ship: "Endurance",
      value: 4500,
      img: endurance,
    },
    {
      id: 2,
      destination: "Jupiter",
      description:
        "Viaje até Júpiter e visite as principais luas, com destaque para a lua Europa. Voe de primeira classe com alimentos inclusos. Valor por adulto, crianças menores de 12 anos inclusas no pacote.",
      ship: "Jupiter-2",
      value: 7000,
      img: jupiter2,
    },
    {
      id: 3,
      destination: "Venus",
      description:
        "Conheça Vênus com o melhor custo benefício. Voe na classe Econômica e desfrute de paisagens cênicas. Valor por pessoa.",
      ship: "Axiom",
      value: 6500,
      img: axiom,
    },
    {
      id: 4,
      destination: "Proxima b",
      description:
        "Uma viagem de ida e volta na primeira classe para a galáxia Proxima Centauri, com parada em Proxima b, um potencial planeta para a colonização humana. Valor por pessoa.",
      ship: "Orion",
      value: 9000,
      img: orion,
    },
    {
      id: 5,
      destination: "Lua",
      description:
        "Passe duas noites em uma das ships mais luxuosas. Na classe Econômica, você aproveita as melhores visões da nossa Lua, visitando as crateras mais famosas. Valor por pessoa.",
      ship: "Milano",
      value: 3500,
      img: milano,
    },
    {
      id: 6,
      destination: "Tour Espacial",
      description:
        "Viaje pela Via Láctea e conheça as principais atrações, do Sol até Plutão, em um tour privado para duas pessoas. Valor por dupla, com refeições e pacote de bebidas inclusos.",
      ship: "Nave Rick and Morty",
      value: 10000,
      img: rickmorty,
    },
  ];

  // Using react context to prevent props drilling and to maintain the code clean
  const context = {
    spaceTravels,
    cart,
    setCart,
    counter,
    setCounter,
    filter,
    setFilter,
    cartComponents,
    setCartComponents,
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
