import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("Swiper", () => class Mocked {});

jest.mock("./Components/Projects/Carousel/SwiperSlider", () => () => (
  <div>SwiperSlider</div>
));

it("renders without crashing", () => {
  const div = document.createElement("header");
  ReactDOM.render(<App />, div);
});
