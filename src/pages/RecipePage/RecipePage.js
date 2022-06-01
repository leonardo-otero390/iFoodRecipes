import TopBar from "../../components/TopBar";
import Banner from "./components/Banner";
import recipes from "../../services/recipesMock";
import { useNavigate, useParams } from "react-router-dom";
import UserCard from "./components/UserCard";
import styled from "styled-components";
import ingredients from "../../services/ingredientsMock";
import IngredientsList from "../../components/Lists/IngrendientsList";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import receipt from "../../assets/icons/receipt-add.svg";

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => {
    return recipe.id === Number(id);
  });
  const navigate = useNavigate();
  return (
    <>
      <TopBar content="RECEITAS IFOOD" />
      <Banner recipe={recipe} />
      <UserCard />
      <Counter>
        <h1>
          <strong>Ingredientes</strong>
        </h1>
        <h2>08</h2>
      </Counter>
      <IngredientsList ingredients={ingredients} icon="eye" />
      <OutlinedButton
        action={() => navigate("/comprar")}
        content="Comprar esses itens"
        icon={receipt}
      />
    </>
  );
}

const Counter = styled.div`
  display: flex;
  margin: 16px 0;
  justify-content: space-between;
  h2 {
    color: #3f3e3e;
  }
`;
