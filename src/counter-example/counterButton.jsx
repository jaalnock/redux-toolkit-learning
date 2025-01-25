import React from "react";

const CounterButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        style={{
          backgroundColor: "#388E3C",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default CounterButton;
