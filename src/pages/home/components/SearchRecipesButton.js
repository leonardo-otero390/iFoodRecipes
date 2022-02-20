import { IoIosArrowForward as Arrow } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Toast from "../../../assets/icons/Toast.svg";
export default function SearchRecipesButton() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/ingredientes")}>
      <div>
        <img src={Toast} alt="torradinha" />
      </div>
      <span>Buscar receitas com ingredientes disponiveis</span>
      <IconContext.Provider value={{ size: "32px" }}>
        <Arrow />
      </IconContext.Provider>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  background: #fedebb;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  width: 100%;
  border: none;
  span {
    padding: 0 16px;
    margin: 8px;
    text-align: left;
  }
  div {
    width: 24px;
    display: flex;
    align-items: center;
    border-radius: 4px 0 0 4px;
  }
  img {
    background: #fcb663;
    border-radius: 50%;
    padding: 8px;
    margin-right: 50px;
  }
`;
