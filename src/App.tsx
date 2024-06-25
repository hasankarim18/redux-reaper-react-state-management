import "./App.css";
import TodoProvider from "./components/context/TodoProvider";
import Todo from "./components/Todo/Todo";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TodoProvider>
        <div className="min-h-svh pb-10 md:p-4">
          <div className="max-w-7xl mx-auto">
            <Todo />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;

/*

*/
