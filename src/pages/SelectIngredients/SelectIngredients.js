import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { CardsList } from "../../styles/style";
import ingredients from "../../services/ingredientsMock";
import IngredientCard from "./components/IngredientCard";
import AddIngredient from "./components/AddIngredient";
import Footer from "./components/Footer";

export default function SelectIngredients() {
  return (
    <>
      <TopBar content="SEUS INGREDIENTES" />
      <h1>
        <strong>Seus Ingredientes</strong>
      </h1>
      <Description>
        Use seus ingredientes disponiveis para encontrar receitas.
      </Description>
      <Line />
      <section>
        <CardsList>
          {ingredients.map((ingredient, index) => (
            <li>
              <IngredientCard key={index} ingredient={ingredient} />
            </li>
          ))}
        </CardsList>
        <AddIngredient />
      </section>
      <Footer />
    </>
  );
}

const Description = styled.p`
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #3f3e3e;
  margin-top: 8px;
`;

const Line = styled.hr`
  color: #edecec;
  margin: 16px 0;
`;
