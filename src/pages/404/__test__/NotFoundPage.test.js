import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import NotFoundPage from "../NotFoundPage";

afterEach(cleanup);

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe("404 page", () => {
  it("renders", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    expect(page).toBeInTheDocument();
  });

  it("is visible", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    expect(page).toBeVisible();
  });

  it("isn't empty", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    expect(page).not.toBeEmptyDOMElement();
  });

  it("contains an image", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    const image = screen.getByAltText("not found");
    expect(page).toContainElement(image);
  });

  it("contains a message", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    const text404 = screen.getByText("404");
    const pageNotFound = screen.getByText("Сторінка не знайдена");
    const couldntFindAPage = screen.getByText(
      "Ми не змогли знайти сторінку, яку Ви шукаєте. Можливо, сталася помилка",
    );
    expect(page).toContainElement(text404);
    expect(page).toContainElement(pageNotFound);
    expect(page).toContainElement(couldntFindAPage);
  });

  it("contains a button", () => {
    render(<NotFoundPage />);
    const page = screen.getByTestId("page");
    const button = screen.getByRole("button");
    expect(page).toContainElement(button);
  });
});
