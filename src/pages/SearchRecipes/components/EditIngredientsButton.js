import { IoIosArrowBack as Arrow } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EditIngredientsButton() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/ingredientes")}>
      <IconContext.Provider value={{ size: "32px" }}>
        <Arrow />
      </IconContext.Provider>
      <div>
        <h1>02 ingredientes</h1>
        <h2>Editar itens disponíveis</h2>
      </div>
    </Container>
  );
}

const Container = styled.button`
  padding: 8px;
  display: flex;
  background: #fedebb;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  width: 100%;
  border: none;
  div {
    text-align: left;
  }
  h1 {
    font-weight: bold;
    margin-bottom: 8px;
  }
  h2 {
    color: #3f3e3e;
  }
`;
