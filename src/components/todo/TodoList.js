import "./todo.css";
import TodoCard from "./TodoCard";

function TodoList({ todoList }) {
  return (
    <>
      <div id="todo-list">
        <h3>List of Todo</h3>
        {todoList.map((todo) => {
          return <TodoCard todo={todo}/>
        })}
      </div>
    </>
  );
}

export default TodoList;
