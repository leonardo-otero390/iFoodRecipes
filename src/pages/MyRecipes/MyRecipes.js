import TopBar from "../../components/TopBar";
import recipes from "../../services/recipesMock";
import Input from "../../components/Input";
import RecipesList from "../../components/Lists/RecipesList";
import OrangeButton from "../../components/Buttons/OrangeButton";
import receipt from "../../assets/icons/receipt-add.svg";
import CategoriesList from "../../components/Lists/CategoriesList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MyRecipes() {
  const navigate = useNavigate();
  return (
    <>
      <TopBar content="MINHAS RECEITAS" />
      <Input />
      <OrangeButton
        image={receipt}
        content="Publicar uma nova receita"
        action={() => navigate("/minhas-receitas/criar")}
      />
      <Counter>
        <h1>
          <strong>3 Itens encontrados</strong>
        </h1>
        <h2>Abra a receita para poder editar</h2>
      </Counter>
      <div style={{ margin: "8px 0" }}>
        <CategoriesList />
      </div>
      <RecipesList recipes={recipes} />
    </>
  );
}

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
  h2 {
    font-size: 12px;
    letter-spacing: 0.05em;
    color: #3f3e3e;
  }
`;
