# # React one way data flow

- react allow one way data flow, always patent to children
- It may be partially solved by react's `useContext` api

### # `useState` vs `useReducer`

- useState is good for single update and for object update `useReducer` is good
- `useReducer` came after `redux` and inspired by `redux`

## A simple for using `useReducer`

```
import React, { useReducer } from "react";

type GenericArray<T> = Array<T>;

type TState = {
  name: string;
  age: string;
  hobbies: GenericArray<string>;
};

const initialState: TState = {
  name: "",
  age: "",
  hobbies: ["hobby one", "hobby two"],
};

type TAction =
  | { type: "name"; payload: string }
  | { type: "age"; payload: string }
  | { type: "hobbies"; payload: string[] };

// type TAction = {
//   name: string;
//   payload: string[];
// };

// explain this point why i have use previous type not later type

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "age":
      return {
        ...state,
        age: action.payload,
      };

    case "hobbies":
      return {
        ...state,
        hobbies: action.payload,
      };

    default:
      return state;
  }
};

const UserInfoWithUseReducer = () => {
  const [userState, userDispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Name: ${userState.name}; Age: ${
        userState.age
      }; Hobbies: ${userState.hobbies.toString()} `
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    // const {name, vlaue} = e.target
    console.log(name, value);
    if (name === "hobbies") {
      const hobbiesArray = value.split(",").map((hobby) => hobby.trim());
      userDispatch({ type: name, payload: hobbiesArray });
    } else if (name === "age") {
      userDispatch({ type: name, payload: value }); // showing red under line under type solve it
    } else if (name === "name") {
      userDispatch({ type: name, payload: value });
    }
    // explain this if else why i have to do separate if else for each type
  };

  return (
    <div>
      <div className="mb-10">
          {/* form */}
          <div className="border-2 p-4 rounded-lg">
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-2 grid grid-cols-12 items-center ">
                <label className="col-span-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 p-2 rounded-lg col-span-10"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2 grid grid-cols-12 items-center">
                <label className="col-span-2" htmlFor="name">
                  Age
                </label>
                <input
                  onChange={handleChange}
                  name="age"
                  type="text"
                  id="age"
                  className="border-2 p-2 rounded-lg col-span-10"
                />
              </div>
              <div className="mb-2 grid grid-cols-12 items-center">
                <label className="col-span-2" htmlFor="name">
                  Hobbies
                </label>
                <div className=" col-span-10">
                  <input
                    className="w-full p-2 rounded-lg   border-2"
                    type="text"
                    id="hobbies"
                    name="hobbies"
                    onChange={handleChange}
                    // onBlur={handleChange}
                  />
                  <span className="text-error">
                    *write hobbies separated by comma
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoWithUseReducer;

```

# # Context Api

-
