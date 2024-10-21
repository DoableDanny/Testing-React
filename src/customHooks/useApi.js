import { useEffect, useState } from "react";

/**
 * Example hook to demonstrate how to test async custom hooks
 */
function useApi() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
}

export default useApi;
