import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Chrome Extension Popup</h1>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/popup/app.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
