import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import FollowersList from "../FollowersList";

import axios from "axios";

// Make the axios response from the randomuser api. Note this is bad example: the pic should come from a local file -- NOT the randomuser.me api!!
const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Danny",
          last: "Adams",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "danTheMan",
        },
      },
    ],
  },
};

// Hook to reset mocks between tests. Can also do this globally inside package.json
// afterEach(() => {
//   jest.clearAllMocks();
// });

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  /////////// Jest Hooks ////////////
  // `before` hooks useful for setting up and reinitialising data shared between tests, db connections, setting up DOM nodes. `after` hooks useful for cleanup -- DOM nodes, closing db connections, clearing mock states.
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RUNNING AFTER ALL TESTS");
  });
  ////////////////////////////////////////////

  it("check at least one follower is rendered", async () => {
    axios.get.mockResolvedValueOnce(mockResponse);

    render(<MockFollowersList />);
    // Notice we are using await and findBy here cus FollowersList requires a call to api b4 rendering followers
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    const multiMockResponse = {
      data: {
        results: [
          ...mockResponse.data.results,
          {
            name: {
              first: "Danny",
              last: "Adams",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "danTheMan",
            },
          },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(multiMockResponse);

    render(<MockFollowersList />);

    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(
      multiMockResponse.data.results.length
    );
  });
});
