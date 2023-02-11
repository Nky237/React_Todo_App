import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

function addTodo (todo){
  setTodos([todo, ...todos])
}
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos}  
       removeTodo={removeTodo}
      toggleComplete={toggleComplete} />
    </div>
  )
}

export default App
