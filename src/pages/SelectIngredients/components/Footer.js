import { IconContext } from "react-icons";
import { IoIosSearch as Search } from "react-icons/io";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <button>
      <IconContext.Provider value={{  size: "24px" }}>
          <Search />
        </IconContext.Provider>
        Buscar Receitas
      </button>
    </Container>
  );
}

const Container = styled.nav`
  background: #f6f0eb;
  width: 80%;
  height: 80px;
  position: fixed;
  bottom: 0;
  max-width: 365px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: #fcb663;
    border-radius: 6px;
    width: 100%;
    max-width: 272px;
    height: 42px;
    border: none;
    font-weight: bold;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;
