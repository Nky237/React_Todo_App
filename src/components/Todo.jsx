import React from 'react'

const Todo = ({todo}) => {
  return (
    <div style= {{display:"flex"}} className='text'>
        <li style={{color:"black", textDecoration: todo.completed ? "line-through": null,
      fontSize:'30px'
      }}>
            {todo.task}
        </li>
        <input type="checkbox" />
        <button>X</button>
    </div>
  )
}

export default Todo