import React, { useContext, useState } from "react";
import { TodoContext, TTodo } from "../context/TodoProvider";
import { typeConstants } from "../context/constants";

const TodoForm = () => {
  const { todoDispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  // console.log(todoLists);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    //  console.log(todoText);
    setTodoText(value);
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: TTodo = {
      id: Math.random().toString(36).substring(2, 7),
      title: todoText,
      isCompleted: false,
    };
    todoDispatch({ type: typeConstants.ADD_TODO, payload: todo });
    setTodoText("");
  };

  return (
    <div>
      <h1 className="">Add Todo</h1>
      <div>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="todoText"
            onChange={changeHandler}
            value={todoText}
            className="w-full p-4 border-2 rounded-lg"
          />
          <input type="submit" className="btn btn-success mt-4 " />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
