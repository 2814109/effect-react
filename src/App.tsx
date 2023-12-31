import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Effect, Console } from "effect";

function App() {
  const [count, setCount] = useState(0);

  // const program1 = Console.log("Hello, World!");
  // Effect.runSync(program1);

  // const program2 = Effect.sync(() => {
  //   console.log("Hello, World! sync"); // side effect
  //   return 42; // return value
  // });
  // console.log(program2);

  const program3 = Effect.promise<string>(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Async operation completed successfully!");
        }, 4000);
      })
  );

  // console.log(program3);

  const program4 = Effect.tryPromise(() =>
    fetch("https://jsonplaceholder.typicode.com/todos/1")
  );

  console.log(program4);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
