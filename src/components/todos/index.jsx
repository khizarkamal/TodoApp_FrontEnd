import { useEffect, useState } from "react";

import TodoInput from "../todoInput";
import TodoList from "../todoList";
import { getAllTodos } from "../../sevices/todoService";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [loading, setLoading] = useState(false);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TodoInput allTodos={allTodos} text={todoText} setText={setTodoText} />
      <TodoList allTodos={allTodos} todos={todos} />
    </>
  );
};

export default Todos;
