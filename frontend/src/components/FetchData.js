import React, { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const FetchData = () => {
    setIsLoading(true);
    // Fetch data from the API endpoint using fetch
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>
        List of Items
        <span>
          <h5>(From Backend)</h5>
        </span>
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={FetchData} disabled={isLoading}>
        {isLoading ? "Fetching..." : "Fetch Data"}
      </button>
    </div>
  );
};

export default FetchData;
