import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

import TodoInput from "../todoInput";
import TodoList from "../todoList";
import { getAllTodos } from "../../sevices/todoService";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    allTodos();
  }, []);

  const allTodos = () => {
    setLoading(true);
    getAllTodos()
      .then((data) => {
        setTodos(data?.data?.data?.todos);
      })
      .catch((error) => {
        console.log("Error---", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white font-bold text-center">{error?.message}</div>
    );
  }
  return (
    <>
      <TodoInput
        setLoading={setLoading}
        allTodos={allTodos}
        text={todoText}
        setText={setTodoText}
      />
      <TodoList allTodos={allTodos} todos={todos} />
    </>
  );
};

export default Todos;
