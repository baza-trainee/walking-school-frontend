import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import SubHeader from "../SubHeader";

afterEach(cleanup);

const testFunc = jest.fn();
const sort = testFunc;

describe("SubHeader", () => {
  it("renders", () => {
    render(<SubHeader />);
    const subHeader = screen.getByTestId("subHeader");
    expect(subHeader).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<SubHeader />);
    const subHeader = screen.getByTestId("subHeader");
    expect(subHeader).toBeVisible();
    expect(subHeader).not.toBeEmptyDOMElement();
  });

  it("contains a button", () => {
    render(<SubHeader />);
    const subHeader = screen.getByTestId("subHeader");
    const button = screen.getByRole("button");
    expect(subHeader).toContainElement(button);
  });

  it("correctly handles withStateColumn prop", () => {
    render(<SubHeader withStateColumn />);
    const subHeader = screen.getByTestId("subHeader");
    const expectedColumn = screen.getByText("Стан");
    expect(subHeader).toContainElement(expectedColumn);
  });

  it("correctly passes the sorting function", () => {
    render(<SubHeader sortFunc={sort} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(sort).toBeCalled();
    expect(sort).toBeCalledTimes(1);
    fireEvent.click(button);
    expect(sort).toBeCalledTimes(2);
  });
});
