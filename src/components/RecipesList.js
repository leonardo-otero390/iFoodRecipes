import { CardsList } from "../styles/style";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ recipes }) {
  return (
    <CardsList>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </CardsList>
  );
}
