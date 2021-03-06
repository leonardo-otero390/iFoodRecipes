import { CardsList } from "../../styles/style";
import IngredientCard from "../Cards/IngredientCard";

export default function IngredientsList({ ingredients, icon }) {
  return (
    <CardsList>
      {ingredients.map((ingredient, index) => (
        <IngredientCard key={index} ingredient={ingredient} icon={icon} />
      ))}
    </CardsList>
  );
}
