import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

const ShowTodos = () => {
  const { todoState } = useContext(TodoContext);
  console.log(todoState);
  return (
    <div>
      <h2>Show All Todos</h2>
      {}
    </div>
  );
};

export default ShowTodos;
