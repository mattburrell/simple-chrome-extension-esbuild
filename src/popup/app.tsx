import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Chrome Extension Popup</h1>
      <div>
        <a className={styles.link} href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className={styles.card}>
        <button className={styles.btn} onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/popup/app.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
