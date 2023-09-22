import React, { useState } from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Projects from "./Projects";

const mockedUseMedia = jest.fn();

jest.mock("../../hooks/useMedia", () => ({
  useMedia: () => ({ isMobile: mockedUseMedia() }),
}));

// const mockCardsLess = Array(2).fill({ image:
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//   title: "FlySport 1",
//   dates: "вересень - жовтень",
//   age: "18-60",
//   description:
//     "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
// });
// const mockCardsMore = Array(5).fill({ image:
//     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//   title: "FlySport 1",
//   dates: "вересень - жовтень",
//   age: "18-60",
//   description:
//     "політ у колбі під потоком вітру який бʼє знизу, з інструктором політ у колбі під потоком вітру який бʼє знизу, з інструктором",
// });
//
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

jest.mock("./Carousel/SwiperSlider", () => () => <div>SwiperSlider</div>);

afterEach(cleanup);
describe("Projects component", () => {
  it("renders project cards when isMobile true", () => {
    mockedUseMedia.mockReturnValue({ isMobile: true });
    render(<Projects />);
    expect(screen.getByTestId("mobile-slider")).toBeInTheDocument();
    expect(screen.getAllByTestId("project-card").length).toBeLessThanOrEqual(3);
    screen.debug();
  });

  // it('does not render button when less than 3 cards' , async () => {
  //   useState.mockReturnValueOnce([mockCardsLess, jest.fn()]);
  //   mockedUseMedia.mockReturnValue({ isMobile: true });
  //   render(<Projects />);
  //   expect(screen.queryByRole('button')).toBeNull();
  //   screen.debug()
  // })
  //
  // it('renders button when more than 3 cards' , async () => {
  //   useState.mockReturnValueOnce([mockCardsMore, jest.fn()]);
  //   mockedUseMedia.mockReturnValue({ isMobile: true });
  //   render(<Projects />);
  //   expect(screen.queryByRole('button')).toBeInTheDocument();
  //   screen.debug()
  // })

  it("renders project cards when isMobile false", () => {
    // useState.mockReturnValueOnce([mockCardsMore, jest.fn()]);
    mockedUseMedia.mockReturnValue({ isMobile: true });
    render(<Projects />);

    // const swiperSliderElement = screen.findByText("Swiper");
    // expect(swiperSliderElement).toBeInTheDocument();
    screen.debug();
  });
});
