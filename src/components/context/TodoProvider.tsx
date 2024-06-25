import { createContext, ReactNode, useReducer } from "react";

type TodoProviderProps = {
  children: ReactNode;
};
type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo;
};

type TDefaultValue = {
  todoState: TTodo[];
  todoDispatch: React.Dispatch<TAction>;
};

// either this way
const defaultValue: TDefaultValue = {
  todoState: [{ id: "", title: "", isCompleted: false }],
  todoDispatch: () => {},
};
// or this way
/*
export const TodoContext = createContext<
  | {
      todoState: TTodo[];
      todoDispatch: React.Dispatch<TAction>;
    }
  | undefined
>(undefined);
*/
export const TodoContext = createContext(defaultValue);

const initialState: TTodo[] = [];

const todoReducer = (state: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);

  const values = {
    todoState,
    todoDispatch,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
