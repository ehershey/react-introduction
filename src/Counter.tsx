import useCounter from "./useCounter";

function Counter({
  count,
  increment,
  decrement,
}: React.PropsWithChildren<ReturnType<typeof useCounter>>) {
  return (
    <>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
