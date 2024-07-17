import React, { useState } from "react";
import { deleteTodoService } from "../../sevices/todoService";
import CrossIcon from "../../assets/icon-cross.svg";

const TodoList = ({ todos, allTodos }) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  const deleteTodo = (id) => {
    console.log("Id---", id);
    deleteTodoService(id)
      .then((resp) => {
        console.log("Resp---", resp);
        allTodos();
      })
      .catch((err) => {
        console.log("Error--", err);
      });
  };

  if (todos.length < 1) {
    return (
      <div className="font-josefin text-2xl text-white font-bold text-center mt-8">
        Add some todos and get your stuff done !
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-6">
      {todos?.map((todo, index) => {
        return (
          <div
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            key={index}
            className=" cursor-pointer flex justify-between items-center bg-dark-desaturatedBlue p-4 rounded-sm text-white font-josefin font-normal"
          >
            <span>{todo?.todoText}</span>
            {mouseEntered && (
              <span>
                <img
                  onClick={() => deleteTodo(todo?._id)}
                  src={CrossIcon}
                  alt="cross-icon"
                />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
