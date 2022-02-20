import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RecipeCard({ recipe }) {
  const { name, description, image, id } = recipe;
  const navigate = useNavigate();
  return (
    <li>
      <Container onClick={() => navigate("/receita/" + id)}>
        <img src={image} alt={name} />
        <div>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
      </Container>
    </li>
  );
}

const Container = styled.button`
  background: #ffffff;
  border: 1px solid #edecec;
  box-shadow: 0px 4px 24px rgba(219, 217, 217, 0.4);
  border-radius: 6px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  padding: 0;
  img {
    border-radius: 6px 0px 0px 6px;
    width: 80px;
    height: 100%;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0;
    height: 100%;
  }
  h1 {
    font-weight: bold;
    font-size: 14px;
  }
  h2 {
    font-size: 10px;
    color: #3f3e3e;
  }
`;
