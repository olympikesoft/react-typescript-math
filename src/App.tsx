import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const [selectedValue, setSelectedValue] = useState(0);

  const [disableButton, setDisableButton] = useState(false);

  const increment = () => {
    let number = Number(count) + Number(selectedValue);
    setCount(number);
    setDisableButton(false);
  };

  const decrement = () => {
    let number = Number(count) - Number(selectedValue);
    if (number < 0) {
      setCount(0);
      setDisableButton(true);
    } else {
      setCount(number);
      setDisableButton(false);
    }
  };

  const selectValue = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  return (
    <div className="App">
      <div className="">
        <h2>Counter: {count}</h2>
        <div className="flexBody">
          <button onClick={() => increment()}>Increment</button>
          <button disabled={disableButton} onClick={() => decrement()}>
            Decrement
          </button>
        </div>
        <select
          value={selectedValue}
          onChange={selectValue}
          className="selectBody"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}
