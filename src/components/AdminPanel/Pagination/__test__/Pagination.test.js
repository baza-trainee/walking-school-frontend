import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

afterEach(cleanup);

const setStateMock = jest.fn();
const useSateMock = (useState) => [useState, setStateMock];
jest.spyOn(React, "useState").mockImplementation(useSateMock);

const pageSize = 1;
const data = [
  { name: "name1", id: 1 },
  { name: "name2", id: 2 },
  { name: "name3", id: 3 },
];

describe("pagination component", () => {
  it("renders", () => {
    render(<Pagination data={data} itemCount={pageSize} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<Pagination data={data} itemCount={pageSize} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeVisible();
    expect(pagination).not.toBeEmptyDOMElement();
  });

  it("contains page numbers buttons and controls", () => {
    render(<Pagination data={data} itemCount={pageSize} />);
    const pagination = screen.getByTestId("pagination");
    const numbers = screen.getByTestId("numbers");
    const controls = screen.getByTestId("controls");
    expect(pagination).toContainElement(numbers);
    expect(pagination).toContainElement(controls);
  });

  it("disables a button on the end of an array", () => {
    render(
      <Pagination
        data={data}
        itemCount={pageSize}
        currentPage={3}
        onPageChange={setStateMock}
      />,
    );
    const button = screen.getByTestId("buttonNext");
    expect(button).toBeDisabled();
  });

  it("correctly handles onPageChange props", () => {
    render(
      <Pagination
        data={data}
        itemCount={pageSize}
        currentPage={0}
        onPageChange={setStateMock}
      />,
    );
    const button = screen.getByTestId("buttonNext");
    fireEvent.click(button);
    expect(setStateMock).toHaveBeenCalled();
    expect(setStateMock).toBeCalledTimes(1);
    fireEvent.click(button);
    expect(setStateMock).toBeCalledTimes(2);
  });
});
