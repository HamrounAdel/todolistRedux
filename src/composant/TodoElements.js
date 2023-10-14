import React from 'react'
import './TodoElement.css'
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { edit,delet,check } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';
function TodoElements({el }) {
  const dispatch=useDispatch()

  //fonction edite todo
  const editTodo=(id)=>{
    dispatch(edit(id))
  }
  //fonction delete todo
  const deletTodo=(id)=>{
    dispatch(delet(id))
  }
  //fonction check todo
  const checkTodo=(id)=>{
    dispatch(check(id))
  }
    
  return (
    <div>
      <ul className='element'>
       <div >
       <span style={{ color: el.checked ? 'red' : 'black' }}>
        {el.text}  </span>
        </div>
        <div>
        <button onClick={()=>deletTodo(el.id)}>
            <FaTrash  style={{color:'red'}}/>
          </button>
          <button onClick={()=>editTodo(el.id)} >
            <FaEdit  style={{color:'blue'}}/>
          </button>
          <button onClick={()=>checkTodo(el.id)}>
            <FaCheck style={{color:'green'}} />
          </button>
   
       
        </div>
      </ul>
    </div>
  )
}

export default TodoElements
