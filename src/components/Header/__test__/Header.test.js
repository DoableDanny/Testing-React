import { render, screen } from "@testing-library/react";
import Header from "../Header";

// it("should render same text passed to title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByText(/my header/i); // REGEX for any case. PROBLEM: if multiple headers found, this test fails: TestingLibraryElementError: Found multiple elements with the role "heading"
//   expect(headingElement).toBeInTheDocument();
// });

it("should render same text passed to title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" }); // This is a good test as it mimics what the user is doing: look for header with the text My Header
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed to title prop 2", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header"); // Looks for HTML elements with title attribute of "Header"
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed to title prop 3", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-2"); // Looks for HTMLElements with data attribute of data-testid="header-2"
  expect(headingElement).toBeInTheDocument();
});

it("should be two heading elements", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

////////// FIND BY -- for async stuff //////////

// notice callback is async
it("should render same text passed to title prop 5", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByTitle("Header"); // pointless example, but look how await has to be used with findBy methods
  expect(headingElement).toBeInTheDocument();
});

////////// QUERY BY -- doesn't cause test fail if not found, so we can check something isn't in the document //////////

it("should be no element with the text 'dogs'", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText("/dogs/i");
  expect(headingElement).not.toBeInTheDocument();
});
