import React from 'react'
import TodoElements from './TodoElements'
import { useSelector } from 'react-redux'
function TodoList() {
 const Todo=useSelector(state=>state.Todo)
console.log('todoo',Todo)
  return (
    <div>
        {Todo.map((el)=><TodoElements el={el} />)}
      
    </div>
  )
}

export default TodoList
