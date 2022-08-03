import "./App.css";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import Todo from "./components/Todo";
import Display from "./features/counter/Display";

function App() {
  return (
    <div className="App">
      {/* <CounterUseReducer /> */}
      <Todo />
      {/* <Display /> */}
    </div>
  );
}

export default App;
