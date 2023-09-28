import React from "react";
import { render, screen } from "@testing-library/react";
import FollowUsFacebook from "./index";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => children,
  SwiperSlide: ({ children }) => children,
}));

jest.mock("swiper/modules", () => ({
  Navigation: (props) => null,
}));

const mockedUseMedia = jest.fn();
jest.mock("../../hooks/useMedia", () => ({
  useMedia: () => ({ isMobile: mockedUseMedia() }),
}));

describe("HeroSection", () => {
  it("If title is rendering", () => {
    render(<FollowUsFacebook />);
    const title = screen.getByText("Стежте за останніми новинами у Facebook");
    expect(title).toBeInTheDocument();
  });

  it("If renderind section on small screen", () => {
    mockedUseMedia.mockReturnValue({ isMobile: true });
    render(<FollowUsFacebook />);
    const smallSection = screen.getByTestId("small-section");
    expect(smallSection).toBeInTheDocument();
  });
});
