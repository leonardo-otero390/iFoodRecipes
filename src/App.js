import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyPage from "./pages/BuyPage/BuyPage";
import Home from "./pages/Home/Home";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import RecipePage from "./pages/RecipePage/RecipePage";
import SearchRecipes from "./pages/SearchRecipes/SearchRecipes";
import SelectIngredients from "./pages/SelectIngredients/SelectIngredients";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ingredientes" element={<SelectIngredients />} />
        <Route exact path="/receitas" element={<SearchRecipes />} />
        <Route exact path="/receita/:id" element={<RecipePage />} />
        <Route exact path="/comprar" element={<BuyPage />} />
        <Route exact path="/minhas-receitas" element={<MyRecipes />} />
      </Routes>
    </Router>
  );
}
