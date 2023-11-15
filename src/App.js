import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);

  const [date, setDate] = useState(new Date());
  const [DayOfWeek, setDayOfWeek] = useState("");

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const countSteps = () => {
    setCounter(count + step);
    const newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() + step);
    setDate(newDate);

    const DayOfWeek = newDate.toLocaleString("en-US", {
      weekday: "long",
    });
    setDayOfWeek(DayOfWeek);
  };
  // const countStepsn = () => {
  //   setCounter(count + step);
  //   const newDate = new Date(date.getTime());
  //   newDate.setDate(date.getDate() - step);
  //   setDate(newDate);
  // };

  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
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
        {/* <button onClick={countStepsn}>Countn</button> */}
      </div>
      <div>
        {count === 0 ? (
          <h3>
            Today date is : {DayOfWeek} {date.toLocaleDateString()}
          </h3>
        ) : null}
        {count > 0 ? (
          <h3>
            The date after {count} days is : {DayOfWeek}{" "}
            {date.toLocaleDateString()}
          </h3>
        ) : null}
        {count < 0 ? (
          <h3>
            The date before {count * -1} days was: {DayOfWeek}{" "}
            {date.toLocaleDateString()}
          </h3>
        ) : null}
      </div>
    </div>
  );
}
