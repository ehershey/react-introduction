import { useReducer } from "react";

function createCounter(
  state: { count: number },
  action: "increment" | "decrement"
) {
  const { count } = state;

  switch (action) {
    case "decrement":
      return { ...state, count: count - 1 };
    case "increment":
      return { ...state, count: count + 1 };
  }
}

function useCounter() {
  const [{ count }, dispatch] = useReducer(createCounter, { count: 0 });
  const increment = () => dispatch("increment");
  const decrement = () => dispatch("decrement");

  return {
    count,
    increment,
    decrement,
  };
}

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
