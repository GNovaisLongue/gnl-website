"use client";

import React from "react";
import "./style.css";

export default function Counters() {
  const [count, setCount] = React.useState<number>(0);
  const countRef = React.useRef(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    // <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    <div>
      <button onClick={handleCounter}>Click Me!</button>
      <div>
        <p>Pressed {count} Times</p>
      </div>
    </div>
  );
}
