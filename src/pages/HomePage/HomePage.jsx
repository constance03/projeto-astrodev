import {
  ContainerProducts,
  Container,
  H2,
  Main,
  Aside,
} from "./HomePageStyled.js";
import Card from "../../components/Card/Card";
import { Filter, Nav } from "../../components/Filter/Filter";
import { Cart } from "../../components/Cart/Cart.jsx";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { spaceTravels, filter, cartComponents } = context;

  return (
    <Container>
      <Header />
      <Nav />
      <Main>
        <Aside>
          <Filter />
          {/* Condicional render to show the cart div */}
          {cartComponents.divCart && <Cart />}
        </Aside>
        <ContainerProducts>
          <h1>Viaje para o espaço com a Astrodev</h1>
          <H2>
            Escolha um de nossos pacotes disponíveis e aproveite uma viagem
            interestelar com o melhor preço do mercado!
          </H2>
          {/* Redering the array with the filters applied */}
          {spaceTravels
            .filter((trip) => {
              return filter.filterName
                ? trip.destino
                    .toLowerCase()
                    .includes(filter.filterName.toLowerCase())
                : trip;
            })
            .sort((a, b) => {
              if (filter.order === "crescent") {
                if (a.value > b.value) return 1;
                if (a.value < b.value) return -1;
              }
              if (filter.order === "decrescent") {
                if (a.value < b.value) return 1;
                if (a.value > b.value) return -1;
              }
            })
            .filter((trip) => {
              if (+filter.filterMinValue <= trip.value) return trip;
            })
            .filter((trip) => {
              if (+filter.filterMaxValue >= trip.value) {
                return trip;
              } else if (+filter.filterMaxValue.length === 0) {
                return trip;
              }
            })
            .map((trip) => {
              return <Card key={trip.id} trip={trip} />;
            })}
        </ContainerProducts>
      </Main>
      <Footer />
    </Container>
  );
};
