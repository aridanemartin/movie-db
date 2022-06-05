import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "./Pagination";
import React from "react";

describe("Pagination when loading", () => {
  let component;

  beforeEach(() => {
    const setPage = React.useState;
    jest.spyOn(React, "useState").mockImplementationOnce(() => setPage(1));

    const setLoading = React.useState;
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => setLoading(false));

    component = render(<Pagination setPage={setPage} />);
  });

  it("renders without crashing", () => {
    expect(component.container.firstChild).toHaveTextContent("Loading...");
  });
});
