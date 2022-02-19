import styled from "styled-components";
import RecipeThumb from "./RecipeThumb";
import macarronada from "../assets/images/macarronada.png";

export default function TopRecipes() {
  return (
    <Container>
      <h1>
        <strong>Top 3 receitas</strong>
      </h1>
      <ul>
        <RecipeThumb
          name={"Macarronada"}
          description={"30 min | 2 pessoas"}
          image={macarronada}
        />
        <RecipeThumb
          name={"Macarronada"}
          description={"30 min | 2 pessoas"}
          image={macarronada}
        />
        <RecipeThumb
          name={"Macarronada"}
          description={"30 min | 2 pessoas"}
          image={macarronada}
        />
      </ul>
    </Container>
  );
}

const Container = styled.section`
  margin: 16px 0;
  h1 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  ul {
    display: flex;
    white-space: nowrap;
    gap: 8px;
    overflow: hidden;
    overflow-x: scroll;
    @media (max-width: 614px) {
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
`;
