import PropTypes from "prop-types";
import { createTodo } from "../../sevices/todoService";

const TodoInput = ({ text, setText, allTodos, setLoading }) => {
  const handleSubmitTodo = (e) => {
    if (text && e.key === "Enter") {
      setLoading(true);
      createTodo({ todoText: text, active: true, completed: false })
        .then(() => {
          setText("");
          allTodos();
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error--", err);
          setText("");
          setLoading(false);
        });
    }
  };

  return (
    <div className=" bg-dark-desaturatedBlue rounded-md shadow-md p-4 flex placeholder:font-josefin">
      <input
        placeholder="Enter Todo Text Here"
        className="bg-transparent text-white font-josefin text-lg flex-1 border-none outline-none caret-white"
        value={text}
        onKeyDown={handleSubmitTodo}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

TodoInput.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  allTodos: PropTypes.func,
  setText: PropTypes.func,
  setLoading: PropTypes.func,
};

export default TodoInput;
