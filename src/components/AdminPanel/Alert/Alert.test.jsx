import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Підключаємо розширення для очікувань

import Alert from "./Alert";

describe("Alert Component", () => {
  it("renders with success type", () => {
    const { getByText } = render(
      <Alert
        type="success"
        title="Success"
        message="This is a success message"
      />,
    );

    expect(getByText("Success")).toBeInTheDocument();
    expect(getByText("This is a success message")).toBeInTheDocument();
  });

  it("renders with question type", () => {
    const { getByText } = render(
      <Alert
        type="question"
        title="Question"
        message="This is a question message"
      />,
    );

    expect(getByText("Question")).toBeInTheDocument();
    expect(getByText("This is a question message")).toBeInTheDocument();
  });

  it("closes when clicking on the backdrop", () => {
    const { getByTestId } = render(
      <Alert
        type="success"
        title="Success"
        message="This is a success message"
        active={true}
      />,
    );

    const backdrop = getByTestId("backdrop");
    fireEvent.click(backdrop);

    expect(backdrop).not.toBeInTheDocument();
  });

  it("closes when clicking on the close button", () => {
    const { getByText, getByTestId } = render(
      <Alert
        type="success"
        title="Success"
        message="This is a success message"
        active={true}
      />,
    );

    const closeButton = getByTestId("Close");
    fireEvent.click(closeButton);

    expect(closeButton).not.toBeInTheDocument();
  });
});
