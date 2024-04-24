function Counter({ id, count, onChange }) {
  const handleIncrement = () => {
    onChange(id, count + 1);
  };

  const handleDecrement = () => {
    onChange(id, Math.max(count - 1, 0));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
