import React, { useState, useEffect } from "react";
import { Chart } from "./charts";
import { fetchCountriesData } from "./api/gasoline";

function Container() {
  const [data, setData] = useState(false);
  const [sorted, setSorted] = useState(false);

  // Use effect to fetch data, currently we don't call API and so we have used a timeout to imitate the loading time.
  useEffect(() => {
    (async () => {
      const response = await fetchCountriesData(sorted);
      setData(response);
    })();
  }, [sorted]);

  const onSort = () => {
    setSorted(!sorted);
  };

  return data ? (
    <Chart data={data} isSorted={sorted} onSort={onSort} />
  ) : (
    <p>Loading Data...</p>
  );
}

export default Container;
