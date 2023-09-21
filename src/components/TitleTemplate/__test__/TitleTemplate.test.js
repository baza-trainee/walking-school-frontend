import { render, screen } from "@testing-library/react";
import { TitleTemplate } from "../TitleTemplate";

test("renders provided title and subtitle", () => {
  render(<TitleTemplate title="Test Title" subtitle="Test Subtitle" />);

  const titleElement = screen.getByText(/Test Title/i);
  const subtitleElement = screen.getByText(/Test Subtitle/i);

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});

test("renders without title or subtitle", () => {
  render(<TitleTemplate />);

  const h2Element = screen.queryByRole("heading", { level: 2 });
  const pElement = screen.queryByRole("paragraph");

  expect(h2Element?.textContent).toBeFalsy();
  expect(pElement?.textContent).toBeFalsy();
});
