import { useState } from "react";
import "./App.css";

function App() {
  const [Result, setResult] = useState("");
  const calcBtns = [];

  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setResult(Result + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      <div className="show-input">{Result}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        <button
          onClick={() => {
            setResult(Result.substr(0, Result.length - 1));
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            setResult("");
          }}
        >
          C
        </button>
      </div>

      <div className="operations subgrid">
        <button onClick={(e) => setResult(Result + e.target.value)} value="+">
          +
        </button>

        <button onClick={(e) => setResult(Result + e.target.value)} value="-">
          +
        </button>

        <button onClick={(e) => setResult(Result + e.target.value)} value="/">
          /
        </button>

        <button onClick={(e) => setResult(Result + e.target.value)} value="*">
          *
        </button>

        <button
          onClick={() => {
            try {
              setResult(
                String(eval(Result)).length > 3 && String(eval(Result)).includes(".")
                  ? String(eval(Result).toFixed(2))
                  : String(eval(Result))
              );
            } catch (error) {
              console.error(error);
            }
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
