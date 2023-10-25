import { screen, render, cleanup } from "@testing-library/react";
import AdminHeader from "../AdminHeader";

afterEach(cleanup);

describe("admin header", () => {
  it("renders", () => {
    render(<AdminHeader heading="heading" />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<AdminHeader heading="heading" />);
    const header = screen.getByTestId("header");
    expect(header).toBeVisible();
    expect(header).not.toBeEmptyDOMElement();
  });

  it("contains a right heading", () => {
    render(<AdminHeader heading="heading" />);
    const header = screen.getByTestId("header");
    const heading = screen.getByRole("heading");
    expect(header).toContainElement(heading);
    expect(heading).toHaveTextContent("heading");
  });

  it("correctly handles withButton, withSearch and withClose props", () => {
    render(<AdminHeader heading="heading" withSearch withClose withButton />);
    const header = screen.getByTestId("header");
    const button = screen.getByText("Додати");
    const close = screen.getByTestId("header-close");
    const search = screen.getByRole("search");
    expect(header).toContainElement(button);
    expect(header).toContainElement(close);
    expect(header).toContainElement(search);
  });
});
