import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Offerings } from "../Offerings";

const mockedUseMedia = jest.fn();
jest.mock("../../../hooks/useMedia", () => ({
  useMedia: () => mockedUseMedia(),
}));

jest.mock(
  "../../../assets/images/offeringsBannerMobile.png",
  () => "mockedBannerMobile",
);
jest.mock(
  "../../../assets/images/offeringsBanner.png",
  () => "mockedBannerTablet",
);
jest.mock(
  "../../../assets/images/offeringsBannerDesktop.png",
  () => "mockedBannerDesktop",
);

afterEach(cleanup);

describe("Offerings Component", () => {
  it("renders correctly when isMobile is true", () => {
    mockedUseMedia.mockReturnValue({ isMobile: true, isTablet: false });
    render(<Offerings />);
    expect(screen.getByAltText("Offerings").src).toContain(
      "mockedBannerMobile",
    );
  });

  it("renders correctly when isTablet is true", () => {
    mockedUseMedia.mockReturnValue({ isMobile: false, isTablet: true });
    render(<Offerings />);
    expect(screen.getByAltText("Offerings").src).toContain(
      "mockedBannerTablet",
    );
  });

  it("renders correctly when isMobile and isTablet are false", () => {
    mockedUseMedia.mockReturnValue({ isMobile: false, isTablet: false });
    render(<Offerings />);
    expect(screen.getByAltText("Offerings").src).toContain(
      "mockedBannerDesktop",
    );
  });

  it("renders image with proper alt attribute", () => {
    mockedUseMedia.mockReturnValue({ isMobile: false, isTablet: false });
    render(<Offerings />);
    const imageElement = screen.getByTestId("offerings-image");
    expect(imageElement).toHaveAttribute("alt", "Offerings");
  });
});
