import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';

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
      fontSize:'24px', padding:'10px 15px'
      }}>
            {todo.task}
        </li>
        <input type="checkbox"
        checked={todo.completed}
        onClick={handleCheckboxClick} />
        <AiFillDelete onClick={handleRemoveClick} 
        style={{fontSize:'50px', color:'red'}}
        />
    </div>
  )
}

export default Todo