import Home from "./pages/Home/home";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details/details";
import { AnimatePresence } from "framer-motion";
import "./Styles/main.scss";
import { DarkModeProvider } from "./contexts/DarkModeProvider/DarkModeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AnimatePresence>
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  </AnimatePresence>
);

reportWebVitals();
