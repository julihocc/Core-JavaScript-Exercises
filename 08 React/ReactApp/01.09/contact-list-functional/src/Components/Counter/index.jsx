export function Counter({ id, count, onChange }) {
  const handleIncrement = () => {
    onChange(id, count + 1);
  };

  const handleDecrement = () => {
    onChange(id, Math.max(count - 1, 0));
  };

 

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <button onClick={handleIncrement} className="btn btn-primary me-2">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-secondary">
          Decrement
        </button>
      </div>
    </div>
  );
}
 