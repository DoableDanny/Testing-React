import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// We can't just render the TodoFooter alone (in isolation) because it contains a Link component from react-router-dom, and that requires the component to be wrapped in <BrowserRouter>, as in index.js. So, we create a mock version of this component so that we can still unit test it in isolation from our other components.
const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

// Common practice to have tests in a Describe Block. Can also have child describe blocks within, e.g. for all tests related to a certain feature of this component we could have "Feature 1" child describe block.
describe("TodoFooter", () => {
  it("should render the correct number for incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render 'task' when there is just one task", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("check element is visible to user", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/);
    expect(paragraphElement).toBeVisible(); // e.g. check CSS visibility != none or it does not have its css property opacity set to 0 etc. To test if not visible: expect(paragraphElement).not.toBeVisible();
  });

  it("check it's a p tag", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/);
    expect(paragraphElement).toContainHTML("p");
  });

  it("check text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent(/1 task left/);
  });

  it("check element's text content is correct", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toEqual("1 task left");
  });
});
