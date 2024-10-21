import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockSetTodo} // this is a unit test, meaining that we don't need to worry about setting todos here and how that affects other components -- that's more of an integration test concern.
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockSetTodo} // this is a unit test, meaining that we don't need to worry about setting todos here and how that affects other components -- that's more of an integration test concern.
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when button is clicked", () => {
    render(
      <AddInput
        todos={[]}
        setTodos={mockSetTodo} // this is a unit test, meaining that we don't need to worry about setting todos here and how that affects other components -- that's more of an integration test concern.
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
