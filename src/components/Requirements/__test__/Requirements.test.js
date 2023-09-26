import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Requirement from "../RequirementsElement/RequirementsElement";
import Requirements from "../Requirements";

afterEach(cleanup);

describe("singular requirement", () => {
  it("renders", () => {
    render(<Requirement text="test text" />);
    const requirement = screen.getByTestId("requirement");
    expect(requirement).toBeInTheDocument();
  });

  it("is visible", () => {
    render(<Requirement text="test text" />);
    const requirement = screen.getByTestId("requirement");
    expect(requirement).toBeVisible();
  });

  it("is not empty", () => {
    render(<Requirement text="test text" />);
    const requirement = screen.getByTestId("requirement");
    expect(requirement).not.toBeEmptyDOMElement();
  });

  it("contains an icon and correctly passes text prop", () => {
    render(<Requirement text="test text" />);
    const requirement = screen.getByTestId("requirement");
    const image = screen.getByAltText("");
    const textContent = screen.getByText("test text");
    expect(requirement).toContainElement(image);
    expect(requirement).toContainElement(textContent);
  });
});

const mockedUseMedia = jest.fn();
jest.mock("../../../hooks/useMedia", () => ({
  useMedia: () => mockedUseMedia(),
}));

jest.mock("../../../assets/images/requirementsSmall.webp", () => "imageSmall");

jest.mock(
  "../../../assets/images/requirementsMedium.webp",
  () => "imageMedium",
);

jest.mock("../../../assets/images/requirementsBig.webp", () => "imageBig");

describe("Requirements component", () => {
  it("renders correct image on mobile", () => {
    mockedUseMedia.mockReturnValue({ isMobile: true });
    render(<Requirements />);
    const image = screen.getByAltText(
      "організатор з прапором україни на спині",
    );
    expect(image.src).toContain("imageSmall");
  });

  it("renders correct image on tablet", () => {
    mockedUseMedia.mockReturnValue({ isTablet: true });
    render(<Requirements />);
    const image = screen.getByAltText(
      "організатор з прапором україни на спині",
    );
    expect(image.src).toContain("imageMedium");
  });

  it("renders correct image on desktop", () => {
    mockedUseMedia.mockReturnValue({ isDesktop: true });
    render(<Requirements />);
    const image = screen.getByAltText(
      "організатор з прапором україни на спині",
    );
    expect(image.src).toContain("imageBig");
  });

  it("contains all the requirements", () => {
    mockedUseMedia.mockReturnValue({ isDesktop: true });
    render(<Requirements />);
    const requirementsList = screen.getByTestId("requirements")
    const list = screen.getAllByTestId("requirement")
    for (let i = 0; i < list.length; i += 1) {
      expect(requirementsList).toContainElement(list[i])
    }
  })
});
