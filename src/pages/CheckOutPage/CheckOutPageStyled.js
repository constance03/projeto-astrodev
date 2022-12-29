import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #3b5e8c;
  color: white;
  padding: 2vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  padding-top: 5vw;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #ebeef3 solid;
`;

export const TitleCart = styled.div`
  background-color: #c4cedc;
  padding: 2vh;
`;

export const TitleDeliver = styled.div`
  background-color: black;
  color: white;
  padding: 2vh;
`;

export const Deliver = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #ebeef3 solid;
`;

//Itens no carrinho (checkout)
export const DivItemsCart = styled.div`
  display: flex;
  align-items: center;
  gap: 7vh;
  padding: 4vh;
  border-bottom: 1px #ebeef3 solid;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 5vw;
  justify-content: space-between;
  padding-bottom: 1vh;
  padding-top: 1vh;
`;

export const ButtonsQuantity = styled.div`
  display: flex;
  gap: 1vw;
`;

export const ButtonQuantity = styled.button`
  padding: 0vw 0.5vw 0vw 0.5vw;
  background-color: #ededed;
  &:active {
    filter: brightness(0.95);
  }
`;

export const ButtonTrash = styled.button`
  display: flex;
  padding: 0.2vw;
`;

export const DivTotalButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 3vw;
  padding: 4vh 1vw 4vh 1vw;
  border-bottom: 1px #ebeef3 solid;
`;
