import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Scroller, wordsToTrackBase } from "../Scroller";
import ResizeObserver from "resize-observer-polyfill";

beforeAll(() => {
  global.ResizeObserver = ResizeObserver;
});

describe("Scroller Component", () => {
  // Marquee from "react-fast-marquee" is designed to render its elements twice
  // Hence, a multiplier of 2 is used here to account for the doubled rendering in our expectations.

  it("renders without crashing", () => {
    render(<Scroller />);
    const scrollerElements = screen.queryAllByTestId("marquee");
    expect(scrollerElements).toBeTruthy();
  });

  it("renders the correct number of words", () => {
    render(<Scroller />);
    const renderedWords = screen.queryAllByTestId("word");
    expect(renderedWords).toHaveLength(wordsToTrackBase.length * 4 * 2);
  });

  it("renders the correct words", () => {
    render(<Scroller />);
    wordsToTrackBase.forEach((word) => {
      expect(screen.getAllByText(word)[0]).toBeInTheDocument();
    });
  });

  it("assigns unique keys to each word", () => {
    render(<Scroller />);
    const words = screen.getAllByTestId("word");
    const uniqueKeys = new Set([...words].map((word) => word.dataset.key));
    expect(uniqueKeys.size).toBe(words.length / 2);
    expect(words.length).toBe(wordsToTrackBase.length * 4 * 2);
  });
});

afterAll(() => {
  delete global.ResizeObserver;
});
