import CategorySection from "./components/CategorySection";
import SearchRecipesButton from "./components/SearchRecipesButton";
import TopBar from "../../components/TopBar";
import TopRecipes from "./components/TopRecipes";
import YourKitchenSection from "./components/YourKitchenSection";
import recipes from "../../services/recipesMock";
import Input from "../../components/Input";
import RecipesList from "../../components/RecipesList";

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
       <RecipesList recipes={recipes} />
      </section>
    </>
  );
}
