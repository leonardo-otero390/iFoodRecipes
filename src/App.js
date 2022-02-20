import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RecipePage from "./pages/RecipePage/RecipePage";
import SearchRecipes from "./pages/SearchRecipes/SearchRecipes";
import SelectIngredients from "./pages/SelectIngredients/SelectIngredients";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/ingredientes" element={<SelectIngredients />} />
        <Route exact path="/receitas" element={<SearchRecipes />} />
        <Route exact path="/receita/:id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}
