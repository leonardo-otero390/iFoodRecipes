import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
