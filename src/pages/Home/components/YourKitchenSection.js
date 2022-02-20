import { AiOutlineHeart as Heart } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Receipt from "../../../assets/icons/Receipt.svg";

export default function YourKitchenSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        <strong>Sua cozinha</strong>
      </h1>
      <div>
        <button onClick={() => navigate("/minhas-receitas")}>
          <img src={Receipt} alt="icone-receita" />
          <span>Minhas receitas</span>
        </button>
        <button>
          <IconContext.Provider value={{ size: "24px" }}>
            <Heart />
          </IconContext.Provider>
          <span>Receitas favoritas</span>
        </button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin: 16px 0;
  h1 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    background: #f6f0eb;
    border-radius: 6px;
    border: none;
    height: 50px;
    display: flex;
    align-items: center;
    width: 45%;
  }
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
