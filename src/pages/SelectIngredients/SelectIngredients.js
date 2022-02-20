import styled from "styled-components";
import TopBar from "../../components/TopBar";
import { Line } from "../../styles/style";
import ingredients from "../../services/ingredientsMock";
import Footer from "./components/Footer";
import IngredientsList from "../../components/Lists/IngrendientsList";
import milk from "../../assets/icons/milk.svg";
import OutlinedButton from "../../components/Buttons/OutlinedButton";

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
        <IngredientsList ingredients={ingredients} icon="cancel" />
        <OutlinedButton content="Add ingredient" icon={milk} />
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
