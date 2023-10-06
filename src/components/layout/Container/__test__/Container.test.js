import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Container from "../Container";

afterEach(cleanup);

describe("container", () => {
  it("renders", () => {
    render(<Container />);
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  it("is not empty when children passed", () => {
    render(
      <Container>
        <div className="test-div" />
      </Container>,
    );
    const container = screen.getByTestId("container");
    expect(container).not.toBeEmptyDOMElement();
  });
});
