import React from 'react'

const Todo = ({todo, removeTodo, toggleComplete}) => {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div style= {{display:"flex"}} className='text'>
        <li style={{color:"black", textDecoration: todo.completed ? "line-through": null,
      fontSize:'30px'
      }}>
            {todo.task}
        </li>
        <input type="checkbox"
        checked={todo.completed}
        onClick={handleCheckboxClick} />
        <button  onClick={handleRemoveClick}>X</button>
    </div>
  )
}

export default Todo