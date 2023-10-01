import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Close from "../Close";

afterEach(cleanup);

const testFunc = jest.fn()
const func = testFunc

describe("close button", () => {
  it("renders", () => {
    render(<Close />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("is visible and not empty", () => {
    render(<Close />);
    const button = screen.getByRole("button");
    expect(button).not.toBeEmptyDOMElement()
    expect(button).toBeVisible()
  })

  it("correctly receives isDisabled and isSecondary props", () => {
    render(<Close isDisabled isSecondary />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("disabled");
    expect(button).toBeDisabled()
    expect(button.className).toContain("secondary");
  });

  it("correctly handles onclick prop", () => {
    render(<Close onClick={func} />);
    const button = screen.getByRole("button");
    fireEvent.click(button)
    expect(func).toBeCalled()
    expect(func).toBeCalledTimes(1)
    fireEvent.click(button)
    expect(func).toBeCalledTimes(2)
  });

  it("contains an icon", () => {
    render(<Close onClick={func} />);
    const button = screen.getByRole("button");
    const icon = screen.getByTestId("icon")
    expect(button).toContainElement(icon)
  })
});
