import React, { Component } from "react";
import Counter from "./counter";

// Stateless Functional Component
const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
  console.log("Counters - Rendered");

  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
