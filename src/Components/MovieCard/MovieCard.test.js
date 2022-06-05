import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MovieCard } from "./MovieCard";
import { DarkModeContext } from "../../contexts/DarkModeProvider/DarkModeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const fakeData = {
  id: 1,
  title: "Movie Title Test",
  poster_path: "/fake.jpg",
  vote_average: 5,
  overview: "Movie Overview Test",
};

describe("Layout", () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DarkModeContext.Provider value={{ darkMode: false }}>
                <MovieCard data={fakeData} />
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

  it("renders the movie title", () => {
    expect(component.container.querySelector("h2")).toHaveTextContent(
      "Movie Title Test"
    );
  });

  it("renders the movie poster", () => {
    expect(component.container.querySelector("img")).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/fake.jpg"
    );
  });

  it("renders the movie rating", () => {
    expect(component.container.querySelector("p")).toHaveTextContent("5 / 10");
  });

  it("renders the movie overview", () => {
    expect(component.getByText("Movie Overview Test")).toBeInTheDocument();
  });

  it("renders the movie link", () => {
    expect(component.container.querySelector("a")).toHaveAttribute(
      "href",
      "/movie/1"
    );
  });

  it("renders the movie star", () => {
    expect(component.container.querySelector(".card__star")).toHaveAttribute(
      "src",
      "star.webp"
    );
  });
});
