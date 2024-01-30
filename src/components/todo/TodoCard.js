import TodoCardAction from "./TodoCardAction";
import "./todo.css";

function TodoCard({todo}){
    return  <div className="todo-card">
    <h4 className="todo-title">{todo}</h4>
    <TodoCardAction/>
  </div>
}

export default TodoCard