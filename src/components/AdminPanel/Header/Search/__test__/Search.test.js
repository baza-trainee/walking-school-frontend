import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Search from "../Search";
import { click } from "@testing-library/user-event/dist/click";

afterEach(cleanup);

const testFunc = jest.fn();
const submit = testFunc;

describe("header search field", () => {
  it("renders", () => {
    render(<Search />);
    const form = screen.getByRole("search");
    expect(form).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<Search />);
    const form = screen.getByRole("search");
    expect(form).toBeVisible();
    expect(form).not.toBeEmptyDOMElement();
  });

  it("contains an input and a button", () => {
    render(<Search />);
    const form = screen.getByRole("search");
    const input = screen.getByTestId("input");
    const button = screen.getByRole("button");
    expect(form).toContainElement(input);
    expect(form).toContainElement(button);
  });

  it("correctly passes isDisabled prop", () => {
    render(<Search isDisabled />);
    const input = screen.getByTestId("input");
    const button = screen.getByRole("button");
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it("correctly passes error prop", () => {
    render(<Search error />);
    const input = screen.getByTestId("input");
    const button = screen.getByRole("button");
    expect(input.className).toContain("error");
    expect(button.className).toContain("error");
  });

  it("correctly handles click", () => {
    render(<Search />);
    const form = screen.getByRole("search");
    const input = screen.getByTestId("input");
    fireEvent.click(form);
    expect(input.focus).toBeTruthy();
  });

  it("correctly handles submit function", () => {
    render(<Search searchFunc={submit} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(submit).toBeCalled();
    expect(submit).toBeCalledTimes(1);
    fireEvent.click(button);
    expect(submit).toBeCalledTimes(2);
  });

  it("updates the field value when new value is inputted", () => {
    render(<Search searchFunc={submit} />);
    const input = screen.getByTestId("input");
    const expected = "hello there";
    fireEvent.change(input, { target: { value: expected } });
    expect(input).toHaveValue(expected);
  });
});
