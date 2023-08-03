"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./page.module.scss";

export default function Home() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((val) => {
      if (val >= 10) {
        toast.error("You can't go over 10!");
        return val;
      }
      return ++val;
    });
  };

  const decrease = () => {
    setCount((val) => {
      if (val <= 0) {
        toast.error("You can't go below 0!");
        return val;
      }
      return --val;
    });
  };
  const reset = () => setCount(0);
  return (
    <main className={styles.main}>
      <h1>Counter</h1>
      <div className={styles.glassCtr}>
        <p>
          Count: <span data-testid="count">{count}</span>
        </p>
      </div>
      <div className={styles.btnCtr}>
        <button
          onClick={increase}
          data-testid="checkIcon"
          className={styles.fancyBtn}
        >
          Increase
        </button>
        <button onClick={decrease} className={styles.fancyBtn}>
          Decrease
        </button>
        <button onClick={reset} className={styles.fancyBtn}>
          Reset
        </button>
      </div>
    </main>
  );
}
