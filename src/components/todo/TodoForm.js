import {useState} from 'react'
import "./todo.css";

function TodoForm({onAdd}) {
    const [todoInput, SetTodoInput] = useState('')
  return (
    <>
      <div id="todo-form-container">
        <form action="#" method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            onAdd(todoInput)
            SetTodoInput("");
          }}
        >
          <div className="field-container">
            <label>Todo</label>
            <input
              type="text"
              required
              onChange={(e) => {
                SetTodoInput(e.target.value);
              }}
              value={todoInput}
            />
          </div>
          <div className="text-center">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm