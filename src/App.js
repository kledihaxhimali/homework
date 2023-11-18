import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);
  const date = new Date();

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const countSteps = () => {
    setCounter(count + step);
    date.setDate(date.getDate() + count);
  };
  // const countSteps = () => {
  //   setCounter(count + step);
  //   date.setDate(date.getDate() + count);
  // };

  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <span>Step </span>
        <button onClick={decrementStep}>-</button>
        <span>{step}</span>
        <button onClick={incrementStep}>+</button>
      </div>
      <div>
        <span>Count: </span>
        <span>{count}</span>
        <button onClick={countSteps}>Count</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? `${count} days after today is`
            : `${count} days before today is`}
        </span>
        <span> {date.toDateString()}</span>
      </div>
    </div>
  );
}
