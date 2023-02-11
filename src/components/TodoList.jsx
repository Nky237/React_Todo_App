import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div>
        <ul style={{marginTop: '30px'}}>
            {
                todos.map(todo =>(
                    <div style={{marginTop: '30px'}}>
                        <Todo key = {todo.id} todo = {todo} />
                    </div>  
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList