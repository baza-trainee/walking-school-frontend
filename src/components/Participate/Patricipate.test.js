import { render, screen } from "@testing-library/react";
import React from "react";
import Participate from "./Participate";

describe("Participate section", () => {
  it("renders the component with correct title and description", () => {
    render(<Participate />);

    const titleElement = screen.getByText("Як взяти участь");
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      "Спробую навчити Вас ходити у незвичних умовах, та всьому що сам знаю. Ми вчитемося ходити у Польських Татрах",
    );
    expect(descriptionElement).toBeInTheDocument();

    screen.debug();
  });
});
