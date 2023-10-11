import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import StateFilter from "../StateFilter";

afterEach(cleanup);

const mockHandleChange = jest.fn();

const options = [
  { value: "all", label: "Всі" },
  { value: "Активний", label: "Активний" },
  { value: "Неактивний", label: "Неактивний" },
];

describe("state filter", () => {
  it("renders", () => {
    render(
      <StateFilter
        currentOption={"option"}
        handleChange={mockHandleChange}
        placeholder={"option"}
      />,
    );
    const selectInput = screen.getByText("option");
    expect(selectInput).toBeInTheDocument();
  });

  it("is visible", () => {
    render(
      <StateFilter
        currentOption={"option"}
        handleChange={mockHandleChange}
        placeholder={"option"}
      />,
    );
    const selectInput = screen.getByText("option");
    expect(selectInput).toBeVisible();
  });

  it("displays the options onclick", () => {
    render(
      <StateFilter
        currentOption={options[0].label}
        handleChange={mockHandleChange}
        placeholder={options[0].label}
      />,
    );
    const selectInput = screen.getByText("Всі");
    fireEvent.mouseDown(selectInput);
    const option2 = screen.getByText(options[1].label);
    const option3 = screen.getByText(options[2].label);
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
    expect(option2).toBeVisible();
    expect(option3).toBeVisible();
  });

  it("correctly works with handleChange function", () => {
    render(
      <StateFilter
        currentOption={options[0].label}
        handleChange={mockHandleChange}
        placeholder={options[0].label}
      />,
    );
    const selectInput = screen.getByText("Всі");
    fireEvent.mouseDown(selectInput);
    fireEvent.click(screen.getByText(options[1].label));
    expect(mockHandleChange).toBeCalled();
    expect(mockHandleChange).toBeCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(
      expect.objectContaining({ value: options[1].value }),
      expect.anything(),
    );
  });
});
