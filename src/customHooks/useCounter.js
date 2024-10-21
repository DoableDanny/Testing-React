const { useState, useCallback } = require("react");

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return {
    count,
    increment,
  };
}

export default useCounter;
