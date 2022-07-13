import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  //console.log(useState('light'))
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setTheme('dark')
  // }

  // function click() {
  //   setTheme('light')
  // }

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment!</button>
      <button onClick={() => setCount(count - 1)}>Decrement!</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
};

export default UseState;
