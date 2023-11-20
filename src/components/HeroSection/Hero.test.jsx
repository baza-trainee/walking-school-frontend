import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => children,
  SwiperSlide: ({ children }) => children,
}));
jest.mock("swiper/modules", () => ({
  Navigation: (props) => null,
}));
// Mocking the data
jest.mock("./data", () => ({
  dataMob: [
    {
      img: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
    },
    // Add more data as needed
  ],
  dataDesc: [
    {
      img: "image2.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    // Add more data as needed
  ],
  dataTab: [
    {
      img: "image3.jpg",
      title: "Title 3",
      description: "Description 3",
    },
    // Add more data as needed
  ],
}));

describe("Hero", () => {
  it("If component is rendering", () => {
    render(<Hero />);
    const swiper = screen.getByTestId("hero-slider");
    expect(swiper).toBeInTheDocument();
  });
});
