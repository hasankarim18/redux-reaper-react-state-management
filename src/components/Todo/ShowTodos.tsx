import { useContext } from "react";
import { TodoContext, TTodo } from "../context/TodoProvider";
import { typeConstants } from "../context/constants";

const ShowTodos = () => {
  const { todoState, myName, todoDispatch } = useContext(TodoContext);
  console.log(todoState);
  const toggleIsComplete = (id: string) => {
    todoDispatch({ type: typeConstants.TASK_COMPLETE_TOGGLE, payload: id });
    //  console.log(id);
  };
  return (
    <div>
      <h2>Show All Todos {myName}</h2>
      {todoState.map((todo: TTodo, i: number) => (
        <div className="flex justify-between mb-4 items-center" key={i}>
          <span className={`${todo.isCompleted ? "line-through" : ""}`}>
            {" "}
            {i + 1}. {todo.title}
          </span>
          <div>
            <button
              onClick={() => {
                toggleIsComplete(todo.id);
              }}
              className={`badge ${
                todo.isCompleted ? "badge-primary" : "badge-success"
              }`}
            >
              {" "}
              {todo.isCompleted ? "Undo" : "Mark as complete"}{" "}
            </button>
            <button className="ms-4 badge badge-error">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTodos;
