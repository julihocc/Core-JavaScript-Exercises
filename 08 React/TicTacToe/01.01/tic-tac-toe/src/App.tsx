import Square from "./components/Square";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="h1">Tic Tac Toe 1.0</div>
      <Square value="X" onClick={() => {}} />
      <Board
        squares={["X", "O", "X", "O", "X", "O", "X", "O", "X"]}
        onClick={(i: Index) => {}}
      />
    </>
  );
}

export default App;
