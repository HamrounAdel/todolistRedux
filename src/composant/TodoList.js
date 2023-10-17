import React, { useState } from 'react'
import TodoElements from './TodoElements'
import { useSelector } from 'react-redux'


function TodoList() {
  
 const Todo=useSelector(state=>state.Todo)
 const  [sort,setSort]=useState('all')
console.log('todoo',Todo)

  return (
    <div>
      <div>
       <button type='button' onClick={()=>setSort('all')}>ALL</button>
      <button type='button' onClick={()=>setSort('done')}>DONE</button>
      <button type='button' onClick={()=>setSort('notyet')}>NOTYET</button>
    </div>
    <div>
        { Todo.length>0 && sort==='all'?
        Todo.map((el)=><TodoElements el={el} />):null}
         { Todo.length>0 && sort==='done'?
        Todo.filter(el => el.checked === true).map((el)=><TodoElements el={el} />):null}
        { Todo.length>0 && sort==='notyet'?
        Todo.filter(el => el.checked === false).map((el)=><TodoElements el={el} />):null}
    </div>
    </div>
  )
}

export default TodoList
