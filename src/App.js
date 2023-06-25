// Components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ThanksPage from "./components/ThanksPage/ThanksPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado-pelo-contato" element={<ThanksPage />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
