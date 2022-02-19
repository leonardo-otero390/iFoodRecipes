import styled from "styled-components";
import RecipeThumb from "./RecipeThumb";
import recipes from "../services/recipesMock";

export default function TopRecipes() {
  return (
    <Container>
      <h1>
        <strong>Top 3 receitas</strong>
      </h1>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeThumb key={index} recipe={recipe} />
        ))}
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
