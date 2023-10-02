import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import ListItem from "../ListItem";

afterEach(cleanup)

const testFunc1 = jest.fn()
const testFunc2 = jest.fn()

const editItem = testFunc1
const deleteItem = testFunc2

describe("List item", () => {
  it("renders", () => {
    render (<ListItem />)
    const item = screen.getByTestId("listItem")
    expect(item).toBeInTheDocument()
  })

  it("is visible and not empty", () => {
    render(<ListItem />)
    const item = screen.getByTestId("listItem")
    expect(item).toBeVisible()
    expect(item).not.toBeEmptyDOMElement()
  })

  it("contains buttons", () => {
    render(<ListItem />)
    const item = screen.getByTestId("listItem")
    const editButton = screen.getByTestId("editButton")
    const deleteButton = screen.getByTestId("deleteButton")
    expect(item).toContainElement(editButton)
    expect(item).toContainElement(deleteButton)
  })

  it("contains heading and date", () => {
    render(<ListItem heading="heading" date="27.09.2023"/>)
    const item = screen.getByTestId("listItem")
    const heading = screen.getByText("heading")
    const date = screen.getByText("27.09.2023")
    expect(item).toContainElement(heading)
    expect(item).toContainElement(date)
  })

  it("correctly handles withStateColumn prop", () => {
    render(<ListItem withStateColumn state="active"/>)
    const item = screen.getByTestId("listItem")
    const state = screen.getByText("active")
    expect(item).toContainElement(state)
  })

  it("correctly passes function props", () => {
    render(<ListItem deleteFunc={deleteItem} navigateToEdit={editItem}/>)
    const editButton = screen.getByTestId("editButton")
    const deleteButton = screen.getByTestId("deleteButton")
    fireEvent.click(editButton)
    expect(editItem).toBeCalled()
    expect(editItem).toBeCalledTimes(1)
    fireEvent.click(deleteButton)
    expect(deleteItem).toBeCalled()
    expect(deleteItem).toBeCalledTimes(1)   
  })
})
