import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import ScrollUp from "../ScrollUp";

afterEach(cleanup);

const scrollToSpy = jest.fn();
global.scrollTo = scrollToSpy;

describe("scroll-up button", () => {
  it("renders", () => {
    render(<ScrollUp />);
    const scrollUp = screen.getByRole("button");
    expect(scrollUp).toBeInTheDocument();
  });

  it("is calling scroll when clicked", () => {
    render(<ScrollUp />);
    const scrollUp = screen.getByTestId("scroll");
    fireEvent.click(scrollUp);
    expect(scrollToSpy).toBeCalled();
  });
});
