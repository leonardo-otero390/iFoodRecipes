import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SelectIngredients from "./pages/SelectIngredients/SelectIngredients";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ingredientes" element={<SelectIngredients />} />
      </Routes>
    </Router>
  );
}
