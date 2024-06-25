import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { todoLists, todoDispatch } = useContext(TodoContext);
  // console.log(todoLists);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.target.value;
    //  console.log(todoText);
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  todoDispatch({type:'addTodo', payload:})
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
            className="w-full p-4 border-2 rounded-lg"
          />
          <input type="submit" className="btn btn-success mt-4 " />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
