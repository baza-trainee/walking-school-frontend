import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Search from "../Search";
import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

afterEach(cleanup);

const testFunc = jest.fn();
const submit = testFunc;

const setStateMock = jest.fn();
const useStateMock = (useState) => [useState, setStateMock];
jest.spyOn(React, "useState").mockImplementation(useStateMock);

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
    render(<Search />);
    const button = screen.getByRole("button");
    const input = screen.getByTestId("input");
    fireEvent.click(button);
    expect(input.focus).toBeTruthy();
  });

  it("updates the field value when new value is inputted", () => {
    render(<Search searchWord={""} setSearchWord={setStateMock} />);
    const input = screen.getByTestId("input");
    const expected = "hello there";
    fireEvent.change(input, { target: { value: expected } });
    expect(setStateMock).toHaveBeenCalledWith(expected);
  });
});
