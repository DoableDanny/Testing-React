import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

it("should increment", () => {
  // get the result of the hook (count and increment)
  const { result } = renderHook(() => useCounter());

  act(() => {
    // increment the current result
    result.current.increment();
  });

  // now we expect the current result's count to be 1
  expect(result.current.count).toBe(1);
});
