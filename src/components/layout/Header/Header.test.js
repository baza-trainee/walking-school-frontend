import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

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
    render(<Header />);
    const navMenu = screen.getByRole("navigation");
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toHaveClass("main__menu");
    screen.debug();
  });

  it("renders header when isDesktop is true", () => {
    mockedDesktopValue.mockImplementation(() => false);
    render(<Header />);
    const navMenu = screen.getByRole("navigation");
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toHaveClass("main__dropdown");
    screen.debug();
  });

  it("renders burger icon on click", () => {
    mockedDesktopValue.mockImplementation(() => false);
    render(<Header />);
    const imgElement = screen.getByAltText("menu toggle");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain("open");

    fireEvent.click(imgElement.parentElement);

    const updatedImgElement = screen.getByAltText("menu toggle");
    expect(updatedImgElement.src).toContain("close");

    screen.debug();
  });

  it("renders dropdown on click", () => {
    mockedDesktopValue.mockImplementation(() => false);
    render(<Header />);

    const navMenu = screen.getByRole("navigation");
    const imgElement = screen.getByAltText("menu toggle");
    fireEvent.click(imgElement.parentElement);

    expect(navMenu).toHaveClass("open");

    screen.debug();
  });
});
