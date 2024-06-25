import { useState } from "react";
import "./App.css";
import CounterWithFunction from "./components/CounterWithFunction";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";
import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="max-w-7xl px-0 md:px-5 mx-auto pt-5 pb-10 ">
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

          <div className="mt-10">
            <UserInfoWithUseState />
          </div>
          <div className="mt-10 border-2 border-purple-400 rounded-lg p-4">
            <UserInfoWithUseReducer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
