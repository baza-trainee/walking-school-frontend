import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import StateFilter from "../StateFilter";

afterEach(cleanup);

const testFunc = jest.fn();
const filterItems = testFunc;

describe("state filter", () => {
  it("renders", () => {
    render(<StateFilter />);
    const filter = screen.getByTestId("filter");
    expect(filter).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<StateFilter />);
    const filter = screen.getByTestId("filter");
    expect(filter).toBeVisible();
    expect(filter).not.toBeEmptyDOMElement();
  });

  it("executes setFilter func on change", () => {
    render(<StateFilter setFilter={filterItems} />);
    const filter = screen.getByTestId("filter");
    fireEvent.change(filter, { target: { value: "Всі" } });
    expect(filterItems).toBeCalled()
    expect(filterItems).toBeCalledTimes(1)
  });
});
