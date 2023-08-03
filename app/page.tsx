"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./page.module.scss";

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  // Increment logic
  const increase = (): void => {
    setCount((val) => {
      if (val >= 10) {
        toast.error("You can't go over 10!");
        return val;
      }
      return ++val;
    });
  };

  // Decrement logic
  const decrease = (): void => {
    setCount((val) => {
      if (val <= 0) {
        toast.error("You can't go below 0!");
        return val;
      }
      return --val;
    });
  };

  // Reset logic
  const reset = (): void => setCount(0);

  return (
    <main className={styles.main}>
      <h1>Counter App</h1>
      <div className={styles.glassCtr}>
        <p>
          Count: <span data-testid="count">{count}</span>
        </p>
      </div>
      <div className={styles.btnCtr}>
        <button
          onClick={increase}
          data-testid="increment"
          className={styles.fancyBtn}
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className={styles.fancyBtn}
          data-testid="decrement"
        >
          Decrease
        </button>
        <button onClick={reset} className={styles.fancyBtn} data-testid="reset">
          Reset
        </button>
      </div>
    </main>
  );
}
