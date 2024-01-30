import {useState} from 'react'
import "./todo.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todoList, SetTodoList] = useState(['buy Vegetables', 'buy milk'])
  return (
    <>
      <TodoForm onAdd={(addedTodo) => {
        console.log(`new added todo ${addedTodo}`)
        SetTodoList(prevList =>[...prevList, addedTodo])

      }}/>
      <TodoList todoList={todoList}/>

    </>
  );
}

export default TodoApp;
