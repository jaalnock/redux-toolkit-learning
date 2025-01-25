import React from "react";
import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

const CounterButton = () => {
  // Returns the dispatch function from the Redux store.
  // @returns — The dispatch function from the Redux store
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(handleIncreaseCountAction());
    // If necessary, we can pass values from function which are payload
    // dispatch(handleIncreaseCountAction({
    //   id : 1,
    //   name : 'sahil'
    // }))
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={handleClick}
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
