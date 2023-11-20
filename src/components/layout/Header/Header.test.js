import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

const mockedDesktopValue = jest.fn();

jest.mock("../../../hooks/useMedia", () => ({
  useMedia: () => ({
    isDesktop: mockedDesktopValue(),
  }),
}));

afterEach(cleanup);
afterAll(() => jest.unmock("../../../hooks/useMedia"));

describe("rendering header", () => {
  it("renders header when isDesktop is true", () => {
    mockedDesktopValue.mockImplementation(() => true);
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const navMenu = screen.getByRole("navigation");
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toHaveClass("main__menu");
  });

  // it("renders header when isDesktop is true", () => {
  //   mockedDesktopValue.mockImplementation(() => false);
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>,
  //   );
  //   const navMenu = screen.getByRole("navigation");
  //   expect(navMenu).toBeInTheDocument();
  //   expect(navMenu).toHaveClass("main__dropdown");
  // });

  it("renders burger icon on click", () => {
    mockedDesktopValue.mockImplementation(() => false);
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const imgElement = screen.getByAltText("menu toggle");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain("open");

    fireEvent.click(imgElement);

    const updatedImgElement = screen.getByAltText("menu toggle");
    expect(updatedImgElement.src).toContain("close");
  });

  it("renders dropdown on click", () => {
    mockedDesktopValue.mockImplementation(() => false);
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const navMenu = screen.getByRole("navigation");
    const imgElement = screen.getByAltText("menu toggle");
    fireEvent.click(imgElement);

    expect(navMenu).toHaveClass("open");
  });
});
