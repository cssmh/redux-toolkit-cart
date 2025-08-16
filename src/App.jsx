import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decremental,
  decrementalByAmount,
  incremental,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={() => dispatch(decremental())}>-</button>
      <p>Count is {count}</p>
      <button onClick={() => dispatch(incremental())}>+</button>
      <button onClick={() => dispatch(decrementalByAmount(10000))}>
        Increment by 10
      </button>
    </div>
  );
}

export default App;
