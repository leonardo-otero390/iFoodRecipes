import styled from "styled-components";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ recipes }) {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </List>
  );
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
