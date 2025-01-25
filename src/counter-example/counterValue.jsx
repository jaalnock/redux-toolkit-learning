import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const countValue = useSelector((state) => state.countValue);

  return (
    <div>
      <p>CounterValue is {countValue}</p>
    </div>
  );
};

export default CounterValue;
