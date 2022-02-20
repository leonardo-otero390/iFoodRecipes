import CategorySection from "./components/CategorySection";
import TopBar from "../../components/TopBar";
import TopRecipes from "./components/TopRecipes";
import YourKitchenSection from "./components/YourKitchenSection";
import recipes from "../../services/recipesMock";
import Input from "../../components/Input";
import RecipesList from "../../components/Lists/RecipesList";
import Toast from "../../assets/icons/Toast.svg";
import OrangeButton from "../../components/Buttons/OrangeButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <TopBar content="RECEITAS IFOOD" />
      <Input />
      <OrangeButton
        image={Toast}
        content="Buscar receitas com ingredientes disponiveis"
        action={() => navigate("/receitas")}
      />
      <YourKitchenSection />
      <TopRecipes />
      <CategorySection />
      <section>
        <RecipesList recipes={recipes} />
      </section>
    </>
  );
}
