import { useState } from "react";

const SecondCounter = () => {
  const [counter, setCounter] = useState({
    increaseCount: 0,
    decreaseCount: 100,
  });

  const increaseHandler = () => {
    setCounter((prev) => {
      console.log(prev);
      console.log({ ...prev });
      return {
        ...prev,
        increaseCount: prev.increaseCount + 1,
      };
    });
  };
  const decreaseHandler = () => {
    setCounter((prev) => {
      return {
        ...prev,
        decreaseCount: prev.decreaseCount - 1,
      };
    });
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={increaseHandler}
        className="btn btn-success mx-10 text-2xl hover:btn-warning px-8"
      >
        Increase <span className="ms-4">{counter.increaseCount}</span>
      </button>
      <button
        onClick={decreaseHandler}
        className="btn btn-error mx-10 text-2xl hover:btn-warning px-8"
      >
        Decrease <span className="ms-4">{counter.decreaseCount}</span>
      </button>
    </div>
  );
};

export default SecondCounter;
