import { useState } from "react";
import PropTypes from "prop-types";
import { deleteTodoService, updateTodo } from "../../sevices/todoService";
import CrossIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg";

const TodoItem = ({ todoText, _id, completed, allTodos, setLoading }) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  const handleCompleted = (id) => {
    setLoading(true);
    updateTodo(id, {
      completed: !completed,
    })
      .then((res) => {
        console.log("resp---", res);
        setLoading(false);
        allTodos();
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error--", err);
      });
  };

  const deleteTodo = (id) => {
    setLoading(true);
    deleteTodoService(id)
      .then((resp) => {
        console.log("Resp---", resp);
        allTodos();
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error--", err);
        setLoading(false);
      });
  };
  return (
    <div
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      className=" cursor-pointer flex justify-between items-center bg-dark-desaturatedBlue p-4 border-b border-dark-darkGrayishBlue text-white font-josefin font-normal"
    >
      <div className="flex items-center gap-4">
        <div
          onClick={() => handleCompleted(_id)}
          className="w-6 h-6 p-1 flex bg-gradient-custom  items-center justify-center rounded-full border border-white"
        >
          {completed ? <img src={CheckIcon} alt="check-icon" /> : null}
        </div>
        <span className={`${completed ? " line-through" : ""}`}>
          {todoText}
        </span>
      </div>
      {mouseEntered && (
        <span>
          <img
            onClick={() => deleteTodo(_id)}
            src={CrossIcon}
            alt="cross-icon"
          />
        </span>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  _id: PropTypes.string,
  todoText: PropTypes.string,
  completed: PropTypes.bool,
  allTodos: PropTypes.func,
  setLoading: PropTypes.func,
};

export default TodoItem;
