import styled from "styled-components";

export const DivCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding-top: 1vh;
  border: solid black 1px;
  width: 18vw;
`;

export const DivItemsCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 3vw;
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

export const Total = styled.p`
  width: 14vw;
  text-align: center;
  align-self: flex-end;
`;
