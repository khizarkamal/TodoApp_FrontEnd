import { all } from "axios";
import { createTodo } from "../../sevices/todoService";

const TodoInput = ({ text, setText, allTodos }) => {
  const handleSubmitTodo = (e) => {
    if (text && e.key === "Enter") {
      createTodo({ todoText: text, active: true, completed: false })
        .then((resp) => {
          console.log("Resp---", resp);
          setText("");
          allTodos();
        })
        .catch((err) => {
          console.log("Error--", err);
          setText("");
        });
    }
  };

  return (
    <div className=" bg-dark-desaturatedBlue rounded-md shadow-md p-4 flex">
      <input
        className="bg-transparent text-white font-josefin text-lg flex-1 border-none outline-none caret-white"
        value={text}
        onKeyDown={handleSubmitTodo}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TodoInput;
