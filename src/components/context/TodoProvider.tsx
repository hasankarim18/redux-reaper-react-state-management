import { createContext, ReactNode, useReducer } from "react";
import { typeConstants } from "./constants";

type TodoProviderProps = {
  children: ReactNode;
};
export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type AddTodoAction = {
  type: typeof typeConstants.ADD_TODO;
  payload: TTodo;
};

type ToggleTaskCompleteAction = {
  type: typeof typeConstants.TASK_COMPLETE_TOGGLE;
  payload: string;
};

type TAction = AddTodoAction | ToggleTaskCompleteAction;

type TDefaultValue = {
  todoState: TTodo[];
  todoDispatch: React.Dispatch<TAction>;
  myName: string;
};

// either this way
const defaultValue: TDefaultValue = {
  todoState: [],
  todoDispatch: () => {},
  myName: "",
};
export const TodoContext = createContext<TDefaultValue>(defaultValue);

// or this way

// export const TodoContext = createContext<
//   | {
//       todoState: TTodo[];
//       todoDispatch: React.Dispatch<TAction>;
//     }
//   | undefined
// >(undefined);

const initialState: TTodo[] = [];

const todoReducer = (state: TTodo[], action: TAction): TTodo[] => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      if (typeof action.payload !== "string") {
        return [...state, action.payload];
      }
      return [...state];
    case typeConstants.TASK_COMPLETE_TOGGLE:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return state;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  const myName = "Hasan";

  const values = {
    todoState,
    todoDispatch,
    myName,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
