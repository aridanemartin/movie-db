import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  let component;

  beforeEach(() => {
    component = render(<Layout />);
  });

  it("renders the correct className", () => {
    const layout = component.container.querySelector("div");
    expect(layout).toHaveClass("pageLayout");
  });
});

describe("Layout (Grid style)", () => {
  let component;

  beforeEach(() => {
    component = render(<Layout gridLayout />);
  });

  it("renders the correct className", () => {
    const gridLayout = component.container.querySelector("div");
    expect(gridLayout).toHaveClass("gridLayout");
  });
});
