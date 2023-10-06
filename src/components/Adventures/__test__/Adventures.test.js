import { cleanup, render, screen } from "@testing-library/react";
import Adventures from "../Adventures";
import Adventure from "../Adventure/Adventure";

afterEach(cleanup);

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

describe("Adventures component", () => {
  it("renders", () => {
    render(<Adventures />);
    const adventures = screen.getByTestId("adventures");
    expect(adventures).toBeInTheDocument();
  });

  it("is visible", () => {
    render(<Adventures />);
    const adventures = screen.getByTestId("adventures");
    expect(adventures).toBeVisible();
  });

  it("isn't empty", () => {
    render(<Adventures />);
    const adventures = screen.getByTestId("adventures");
    expect(adventures).not.toBeEmptyDOMElement();
  });

  it("contains cards", () => {
    render(<Adventures />);
    const adventures = screen.getByTestId("adventures");
    const cards = screen.getAllByTestId("card");
    for (let i = 0; i < cards.length; i += 1) {
      expect(adventures).toContainElement(cards[i]);
    }
  });
});
