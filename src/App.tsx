import { useState } from "react";
import "./App.css";
import CounterWithFunction from "./components/CounterWithFunction";

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="max-w-7xl px-0 md:px-5 mx-auto pt-5 min-h-svh">
          <h1 className="text-2xl">React one way data flow</h1>
          <div className="flex flex-col items-center p-10 border-4 rounded-xl border-red-600 gap-4">
            <h2 className="text-2xl font-semibold text-red-600">App</h2>
            <div className="">
              <p>Lifting Couter Stage to App State</p>
              <div className="text-center text-2xl text-red-600 font-semibold">
                {count}
              </div>
            </div>
            <CounterWithFunction count={count} setCount={setCount} />
            {/* <SecondCounter /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
