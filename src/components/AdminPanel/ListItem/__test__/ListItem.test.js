import { screen, cleanup, render } from "@testing-library/react";
import ListItem from "../ListItem";

afterEach(cleanup)

describe("List item", () => {
  it("renders", () => {
    render (<ListItem />)
  })
})