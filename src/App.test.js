import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Підтримати/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders logo", () => {
  render(<App />);
  const logoImage = screen.getByAltText("logo");
  expect(logoImage).toBeInTheDocument();
});
