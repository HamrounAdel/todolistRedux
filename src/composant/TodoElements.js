import React from 'react'
import './TodoElement.css'
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { edit,delet,handelcheck} from '../redux/todoSlice';
import { useDispatch } from 'react-redux';
function TodoElements({el }) {
  const dispatch=useDispatch()
   
  return (
    <div>
      <ul className='element'>
       <div >
       <span style={{ color: el.checked ? 'red' : 'black' }}>
        {el.text}  </span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          
            <FaTrash  onClick={()=>dispatch(delet(el.id))} style={{color:'red'}}/>
          
            <FaEdit  onClick={()=>dispatch(edit(el.id))} style={{color:'blue'}}/>
          
            <FaCheck onClick={()=>dispatch(handelcheck(el.id))} style={{color:'green'}} />
           
        </div>
      </ul>
    </div>
  )
}

export default TodoElements
