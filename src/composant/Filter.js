import React from 'react'
import {handelfilter} from '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import {useState} from 'react';

function Filter() {
    const dispatch=useDispatch()
    const [newTask,setNewTask] = useState()
    console.log('')

  return (
    <div>
       <button type='button' onClick={()=>dispatch(handelfilter('all'))}>ALL</button>
      <button type='button' onClick={()=>dispatch(handelfilter('done'))}>DONE</button>
      <button type='button' onClick={()=>dispatch(handelfilter('notyet'))}>NOTYET</button>
    </div>
  )
}

export default Filter
