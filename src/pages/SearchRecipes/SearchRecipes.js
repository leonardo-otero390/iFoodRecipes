import CategoriesList from "../../components/Lists/CategoriesList";
import Input from "../../components/Input";
import RecipesList from "../../components/Lists/RecipesList";
import TopBar from "../../components/TopBar";
import { Line } from "../../styles/style";
import EditIngredientsButton from "./components/EditIngredientsButton";
import recipes from "../../services/recipesMock";

export default function SearchRecipes() {
  return (
    <>
      <TopBar content="RECEITAS SUGERIDAS" />
      <EditIngredientsButton />
      <Line />
      <Input />
      <h1 style={{ margin: "24px 0" }}>
        <strong>3 Itens encontrados</strong>
      </h1>
      <CategoriesList  />
      <RecipesList recipes={recipes} />
    </>
  );
}
