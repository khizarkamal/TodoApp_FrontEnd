import { useState } from "react";
import TodoItem from "../todoItem";
import { ColorRing } from "react-loader-spinner";
import PropTypes from "prop-types";

const TodoList = ({ todos, allTodos }) => {
  const [loading, setLoading] = useState(false);

  if (todos.length < 1) {
    return (
      <div className="font-josefin text-2xl text-white font-bold text-center mt-4">
        Add some todos and get your stuff done !
      </div>
    );
  }
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

  return (
    <div className="mt-8 flex flex-col shadow-lg rounded-md overflow-hidden">
      {todos?.map((todo, index) => {
        return (
          <TodoItem
            setLoading={setLoading}
            allTodos={allTodos}
            key={index}
            {...todo}
          />
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  allTodos: PropTypes.func,
};
export default TodoList;
