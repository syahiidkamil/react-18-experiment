import { faker } from "@faker-js/faker";
import { useState } from "react";
import { flushSync } from "react-dom";

const DEFAULT_NAME = "React";

const AutoBatching = () => {
  console.log("COMPONENT RENDERED");
  const [count, setCount] = useState(0);
  const [name, setName] = useState(DEFAULT_NAME);
  // Batched at react 17
  const addCountHandlerPreviousVersion = () => {
    setCount((currCount) => currCount + 1);
    setCount((currCount) => currCount + 2);
    setName(faker.name.fullName());
  };
  // Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default before 18
  // Batched at react 18
  const addCountAndChangeNameHandler = () => {
    setTimeout(() => {
      setCount((currCount) => currCount + 1);
      setCount((currCount) => currCount + 2);
      setName(faker.name.fullName());
    }, 250);
  };
  // Without Batched
  const addCountAndChangeNameWoBatchedHandler = () => {
    setTimeout(() => {
      flushSync(() => {
        setCount((currCount) => currCount + 1);
      });
      flushSync(() => {
        setCount((currCount) => currCount + 2);
      });
      flushSync(() => {
        setName(faker.name.fullName());
      });
    }, 250);
  };

  const resetCounterHanlder = () => {
    setCount(0);
    setName(DEFAULT_NAME);
  };

  return (
    <section>
      <p>
        <h5>Full Name: {name}</h5>
        <h5>count: {count}</h5>
      </p>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <button onClick={addCountAndChangeNameHandler}>
          Increase Count and Change Name
        </button>
        <button
          style={{ marginTop: 20 }}
          onClick={addCountAndChangeNameWoBatchedHandler}
        >
          Increase Count and Change Name Without Batching
        </button>
        <button style={{ marginTop: 20 }} onClick={resetCounterHanlder}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default AutoBatching;
