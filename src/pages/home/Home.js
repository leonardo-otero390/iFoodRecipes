import CategorySection from "./components/CategorySection";
import Input from "./components/Input";
import RecipeCard from "./components/RecipeCard";
import SearchRecipesButton from "./components/SearchRecipesButton";
import TopBar from "../../components/TopBar";
import TopRecipes from "./components/TopRecipes";
import YourKitchenSection from "./components/YourKitchenSection";
import recipes from "../../services/recipesMock";
import { CardsList } from "../../styles/style";

export default function Home() {
  return (
    <>
      <TopBar content="RECEITAS IFOOD" />
      <Input />
      <SearchRecipesButton />
      <YourKitchenSection />
      <TopRecipes />
      <CategorySection />
      <section>
        <CardsList>
          {recipes.map((recipe, index) => (
            <li>
              <RecipeCard key={index} recipe={recipe} />
            </li>
          ))}
        </CardsList>
      </section>
    </>
  );
}