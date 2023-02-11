import React, { useState } from 'react';
import uuid from 'react-uuid';


const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })
    function handleChange(e){
        setTodo({
            ...todo,
            task : e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: uuid() })
            setTodo({...todo, task:""})
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='form'>
            <input type="text"
            name='task' 
            value={todo.task}
            onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm