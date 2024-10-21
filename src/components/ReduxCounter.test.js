import { fireEvent, render, screen } from "@testing-library/react";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import { store, createStore } from "../app/store";

it("increment", () => {
  render(
    // <Provider store={store}> // Important to note with testing Redux -- we need to create a new store for every test, otherwise each test will be using the modified state from the previous test(s).
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

it("increment again", () => {
  render(
    // <Provider store={store}> // this test would fail if we don't create a new store
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});
