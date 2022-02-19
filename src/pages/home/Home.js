import CategorySection from "./components/CategorySection";
import Input from "./components/Input";
import RecipeCard from "./components/RecipeCard";
import SearchRecipesButton from "./components/SearchRecipesButton";
import TopBar from "./components/TopBar";
import TopRecipes from "./components/TopRecipes";
import YourKitchenSection from "./components/YourKitchenSection";
import recipes from "../../services/recipesMock";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <TopBar content="RECEITAS IFOOD" />
      <Input />
      <SearchRecipesButton />
      <YourKitchenSection />
      <TopRecipes />
      <CategorySection />
      <StyledRecipeList>
        <ul>
          {recipes.map((recipe, index) => (
            <li>
              <RecipeCard key={index} recipe={recipe} />
            </li>
          ))}
        </ul>
      </StyledRecipeList>
    </>
  );
}
const StyledRecipeList = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
