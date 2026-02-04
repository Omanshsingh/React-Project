import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <br />
      <h2>{count}</h2>
      <button id="1" onClick={() => setCount(count - 1)}>
        decrease
      </button>
      <button id="2" onClick={() => setCount(0)}>
        reset
      </button>
      <button id="3" onClick={() => setCount(count + 1)}>
        increase
      </button>{" "}
      <br />
      <button id="1" onClick={() => setCount(count - 10)}>
        decrease by 10
      </button>
      <button id="3" onClick={() => setCount(count + 10)}>
        increase by 10
      </button>
    </div>
  );
};

export default App;
