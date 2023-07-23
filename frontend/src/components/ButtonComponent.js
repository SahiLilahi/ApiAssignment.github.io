//JSX and Component Creation

import React, { useState } from "react";

const ButtonComponent = ({ label, onClickHandler }) => {
  const [message, setMessage] = useState("Click it");

  const handleButtonClick = () => {
    setMessage("Clicked");
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <button onClick={handleButtonClick}>{label}</button>
    </div>
  );
};

export default ButtonComponent;
