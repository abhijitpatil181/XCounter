import { useState } from "react";

const Counter = () => {
  const [valueOfCount, setValueOfCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <p style={{ fontSize: "1.5rem" }}>Count: {valueOfCount}</p>
      <button onClick={() => setValueOfCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setValueOfCount((prevState) => prevState - 1)}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
