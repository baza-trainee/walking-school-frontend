import { render, screen } from "@testing-library/react";
import Adventures from "../Adventures";
import Adventure from "../Adventure/Adventure";

jest.mock("../../../assets/icons/BungeeJumping.svg", () => "testIcon");

describe("Adventure card", () => {
  it("renders", () => {
    render(
      <Adventure text="test text" imageSrc="testIcon" imageAlt="test alt" />,
    );
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("is visible", () => {
    render(
      <Adventure text="test text" imageSrc="testIcon" imageAlt="test alt" />,
    );
    const card = screen.getByTestId("card");
    expect(card).toBeVisible();
  });

  it("contains an icon", () => {
    render(
      <Adventure text="test text" imageSrc="testIcon" imageAlt="test alt" />,
    );
    const card = screen.getByTestId("card");
    const icon = screen.getByTestId("card-icon");
    expect(card).toContainElement(icon);
  });

  it("correctly passes imageSrc and imageAlt props", () => {
    render(
      <Adventure text="test text" imageSrc="testIcon" imageAlt="test alt" />,
    );
    const icon = screen.getByTestId("card-icon");
    expect(icon).toHaveAttribute("alt", "test alt");
    expect(icon).toHaveAttribute("src", "testIcon");
  });

  it("correctly passes text prop", () => {
    render(
      <Adventure text="test text" imageSrc="testIcon" imageAlt="test alt" />,
    );
    const textContainer = screen.getByText("test text");
    expect(textContainer).toBeInTheDocument();
  });
});
