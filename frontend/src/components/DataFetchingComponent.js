//state management

import React, { useState } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    setIsFetching(true);

    setTimeout(() => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.log("Error fetching data:", error))
        .finally(() => setIsFetching(false));
    });
  };

  return (
    <div>
      <h2>
        List of Items
        <span>
          <h5>(From Json file)</h5>
        </span>
      </h2>

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchData} disabled={isFetching}>
        {isFetching ? "Fetching..." : "Fetch Data"}
      </button>
    </div>
  );
};

export default DataFetchingComponent;
