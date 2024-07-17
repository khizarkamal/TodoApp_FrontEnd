import axios from "axios";

export const  getAllTodos = () => {
    return axios.get("https://todo-app-backend-pjgqwrugi-khizar-kamals-projects.vercel.app/api/v1/todos");
}

export const createTodo = (todo) => {
    return axios.post("https://todo-app-backend-pjgqwrugi-khizar-kamals-projects.vercel.app/api/v1/todos",todo);
}

export const deleteTodoService = (id) => {
    return axios.delete(`https://todo-app-backend-pjgqwrugi-khizar-kamals-projects.vercel.app/api/v1/todos/${id}`);
}