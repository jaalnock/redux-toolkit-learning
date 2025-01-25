import "./App.css";
import CounterButton from "./counter-example/counterButton";
import CounterValue from "./counter-example/counterValue";

function App() {
  return (
    <>
      <div>
        <h1>Redux Toolkit</h1>
        <CounterButton />
        <CounterValue />
      </div>
    </>
  );
}

export default App;
