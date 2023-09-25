import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import SwiperSlider from "./SwiperSlider";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => children,
  SwiperSlide: ({ children }) => children,
}));
jest.mock("swiper/modules", () => ({
  Navigation: (props) => null,
}));
describe("SwiperSlider Component", () => {
  it("duplicates items if length is less than 6", () => {
    const mockItems = [
      {
        image: "image1.jpg",
        title: "Title 1",
        dates: "Date 1",
        age: 20,
        description: "Description 1",
      },
      {
        image: "image2.jpg",
        title: "Title 2",
        dates: "Date 2",
        age: 21,
        description: "Description 2",
      },
    ];
    render(<SwiperSlider items={mockItems} />);
    const slides = screen.getAllByTestId("project-card");
    expect(slides.length).toBe(mockItems.length * 2);
  });

  it("does not duplicate items if length is 6 or more", () => {
    const mockItems = [
      {
        image: "image1.jpg",
        title: "Title 1",
        dates: "Date 1",
        age: 20,
        description: "Description 1",
      },
      {
        image: "image2.jpg",
        title: "Title 2",
        dates: "Date 2",
        age: 21,
        description: "Description 2",
      },
      {
        image: "image1.jpg",
        title: "Title 1",
        dates: "Date 1",
        age: 20,
        description: "Description 1",
      },
      {
        image: "image2.jpg",
        title: "Title 2",
        dates: "Date 2",
        age: 21,
        description: "Description 2",
      },
      {
        image: "image1.jpg",
        title: "Title 1",
        dates: "Date 1",
        age: 20,
        description: "Description 1",
      },
      {
        image: "image2.jpg",
        title: "Title 2",
        dates: "Date 2",
        age: 21,
        description: "Description 2",
      },
      {
        image: "image1.jpg",
        title: "Title 1",
        dates: "Date 1",
        age: 20,
        description: "Description 1",
      },
      {
        image: "image2.jpg",
        title: "Title 2",
        dates: "Date 2",
        age: 21,
        description: "Description 2",
      },
    ];
    render(<SwiperSlider items={mockItems} />);
    const slides = screen.getAllByTestId("project-card");
    expect(slides.length).toBe(mockItems.length);
  });
});
