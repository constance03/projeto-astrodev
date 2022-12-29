import React, { useContext } from "react";
import {
  Container,
  DivInput,
  NavStyled,
  InputFilter,
  DivImgCounter,
  Counter,
  ButtonCart,
  InputSearchName,
  SelectOrder,
} from "./filterStyled";
import cart from "../../assets/cart.png";
import { GlobalContext } from "../../contexts/GlobalContext";

export function Filter() {
  const context = useContext(GlobalContext);
  const { counter, filter, setFilter, cartComponents, setCartComponents } =
    context;

  // Track the filter changes
  const onChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  // Open the cart div 
  const onClickCartIcon = () => {
    setCartComponents({ ...cartComponents, divCart: !cartComponents.divCart });
  };

  return (
    <div>
      <Container>
        <p>Faixa de preço</p>
        <DivInput>
          <InputFilter
            placeholder="Valor mínimo"
            type="number"
            name="filterMinValue"
            value={filter.filterMinValue}
            onChange={onChangeFilter}
          ></InputFilter>
          <InputFilter
            placeholder="Valor máximo"
            type="number"
            name="filterMaxValue"
            value={filter.filterMaxValue}
            onChange={onChangeFilter}
          ></InputFilter>
        </DivInput>
      </Container>

      <DivImgCounter>
        <ButtonCart onClick={onClickCartIcon}>
          <img src={cart} />
        </ButtonCart>
        {/* Show the badge with the items quantity */}
        {cartComponents.badge && <Counter>{counter}</Counter>}
      </DivImgCounter>
    </div>
  );
}

export function Nav() {
  const context = useContext(GlobalContext);
  const { filter, setFilter } = context;

  const onChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <NavStyled>
        <InputSearchName
          placeholder="Pesquisar pacote..."
          type="text"
          name="filterName"
          value={filter.filterName}
          onChange={onChangeFilter}
        ></InputSearchName>

        <SelectOrder onChange={onChangeFilter} name="order">
          <option value="">Ordenar</option>
          <option value="crescent">Menor preço</option>
          <option value="decrescent">Maior preço</option>
        </SelectOrder>
      </NavStyled>
    </div>
  );
}
