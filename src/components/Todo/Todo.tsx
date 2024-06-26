import ShowTodos from "./ShowTodos";
import TodoForm from "./TodoForm";

const Todo = () => {
  return (
    <div>
      Todos
      <div className="grid grid-cols-12">
        <div className="border-2 p-4 col-span-4">
          <TodoForm />
        </div>
        <div className="border-2 p-4 col-span-8">
          <ShowTodos />
        </div>
      </div>
    </div>
  );
};

export default Todo;
