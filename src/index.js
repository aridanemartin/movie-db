import Home from "./pages/Home/home";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details/details";
import "./Styles/main.scss";

// const Home = React.lazy(() => import("./pages/Home/home"));
// const Details = React.lazy(() => import("./pages/Details/details"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
