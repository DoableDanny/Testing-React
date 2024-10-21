import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

// Helper function to add tasks
const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  // These are integration tests, as we are testing how multiple components are interacting with each other.
  it("should add the todo item to the todo list when type todo and click add button", () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should add multiple todos to the todo list", () => {
    render(<MockTodo />);
    addTasks([
      "Go Grocery Shopping",
      "Take the bins out",
      "Finish testing course",
    ]);

    // Now we need some way to get all of these tasks elements from the list. So, in TodoList, we can give each one an data-testid="task-container"
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
    render(<MockTodo />);
    addTasks(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
