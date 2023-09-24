import React from "react";
import { render, screen } from "@testing-library/react";
import Steps from "./Steps";

describe("Steps component", () => {
  it("renders steps with given labels", () => {
    const labels = ["Step 1", "Step 2", "Step 3"];
    render(<Steps steps={labels.length} labels={labels} />);

    labels.forEach((label) => {
      const stepElement = screen.getByText(label);
      expect(stepElement).toBeInTheDocument();
    });
  });

  it("renders correct number of steps", () => {
    const labels = ["Step 1", "Step 2", "Step 3", "Step 4"];
    render(<Steps steps={labels.length} labels={labels} />);

    const stepElements = screen.getAllByTestId("step");
    expect(stepElements.length).toBe(labels.length);
  });

  it("renders the Steps component with correct labels", () => {
    const labels = ["Step 1", "Step 2", "Step 3", "Step 4"];
    render(<Steps steps={labels.length} labels={labels} />);

    const stepElements = screen.getAllByTestId("step");
    expect(stepElements.length).toBe(4);

    expect(stepElements[0]).toHaveTextContent("Step 1");
    expect(stepElements[1]).toHaveTextContent("Step 2");
    expect(stepElements[2]).toHaveTextContent("Step 3");
    expect(stepElements[3]).toHaveTextContent("Step 4");
  });

  it("renders no steps when steps prop is 0", () => {
    render(<Steps steps={0} labels={[]} />);

    const stepElements = screen.queryAllByTestId("step");
    expect(stepElements.length).toBe(0);
  });
});
