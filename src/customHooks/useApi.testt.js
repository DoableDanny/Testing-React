// NOTE: I couldn't get msw to work with create react app, so this test won't pass. Hence the .testt file name so jest ignores it. But the example still shows how to test an async custom hook

import { renderHook } from "@testing-library/react-hooks";
import { http } from "msw";
import { setupServer } from "msw/node";
import useApi from "./useApi";

// mock our api calls
const server = setupServer(
  http.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Danny" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("should increment", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useApi());

  // wait until result is updated
  await waitForNextUpdate();

  // toEqual, not toBe because we are checking the objects are the same, not if they have the same reference address.
  expect(result.current).toEqual({ name: "Danny" });
});
