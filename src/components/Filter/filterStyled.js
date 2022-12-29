import styled from "styled-components";

//Filter
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  height: 15vh;
  gap: 1vh;
  padding-left: 1vw;
  padding-top: 1vh;
  border: 1px solid black;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  gap: 0.5vh;
`;

export const ButtonCart = styled.div`
  padding-top: 4vh;
  background-color: white;
`;

export const Counter = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 80%;
  text-align: center;
  position: absolute;
  top: 14px;
  left: 24px;
`;

export const DivImgCounter = styled.div`
  display: flex;
  position: relative;
`;

export const InputFilter = styled.input`
  border: 1px black solid;
  padding-left: 0.4vw;
`;

//Nav
export const InputSearchName = styled.input`
  color: black;
`;

export const SelectOrder = styled.select`
  color: black;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #3b5e8c;
  color: white;
  padding: 2vh;
`;
