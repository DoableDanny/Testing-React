import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ZustandCounter } from "./ZustandCounter";
import { useStore } from "../app/zustandStore";

const originalState = useStore.getState();
beforeEach(() => {
  // Like with Redux, we have to ensure that we reset the global state after each test, otherwise each test will not be pure -- it will be flaky :(.
  useStore.setState(originalState);
});

test("add one", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

test("add one again", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});
