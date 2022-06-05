import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { DarkModeContext } from "../../contexts/DarkModeProvider/DarkModeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("NavBar", () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DarkModeContext.Provider value={{ darkMode: false }}>
                <NavBar />
              </DarkModeContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("renders the correct className", () => {
    const navBar = component.container.querySelector("nav");
    expect(navBar).toHaveClass("navWrapper");
  });

  it("renders the correct logo", () => {
    const logo = component.container.querySelector("img");
    expect(logo).toHaveAttribute("src", "aridaneLogo.webp");
  });
});
