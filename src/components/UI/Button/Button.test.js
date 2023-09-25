import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders button with default 'large' variant", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("large");
  });

  it("renders a button with 'small' variant", () => {
    render(
      <Button
        variant="small"
        style={{ background: "linear-gradient(286deg, #444 0%, #2EC4B6 100%)" }}
      >
        Small Button
      </Button>,
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("small");
  });

  it("renders a button with 'tertiary' variant", () => {
    render(
      <Button
        variant="tertiary"
        style={{ background: "linear-gradient(286deg, #444 0%, #2EC4B6 100%)" }}
      >
        Tertiary Button
      </Button>,
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("tertiary");
    expect(screen.getByTestId("tertiary-icon")).toBeInTheDocument();
  });

  it("renders a button when 'disabled' prop is true", () => {
    render(
      <Button
        disabled={true}
        style={{ background: "linear-gradient(286deg, #444 0%, #2EC4B6 100%)" }}
      >
        Disabled Button
      </Button>,
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("disabled");
  });

  it("onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
