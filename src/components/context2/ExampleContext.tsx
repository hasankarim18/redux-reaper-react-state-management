import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const ExampleContext = () => {
  return (
    <div>
      <Component1 />
    </div>
  );
};

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2 className="h1">
        Hello <span className="text-purple-500"> {`${user}`} </span> again!
      </h2>
    </>
  );
}

export default ExampleContext;
