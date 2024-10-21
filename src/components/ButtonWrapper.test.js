import { fireEvent, render, screen } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";

describe("ButtonWrapper", () => {
  it("check handles onClick", async () => {
    const onClick = jest.fn(); // a stub function created by Jest. This is a function that can track how many times it's called and what it's called with.
    render(<ButtonWrapper onClick={onClick} title="Add Item" />);

    const buttonElement = screen.getByText("Add Item");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
