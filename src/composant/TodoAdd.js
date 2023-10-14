
import "./TodoAdd.css"
import { useDispatch } from "react-redux"
import { add } from "../redux/todoSlice"
import { useState } from "react"
function TodoAdd() {
 const dispatch=useDispatch()
const [input,setInput]=useState('')

const ajout=()=>{
  if(input.length>0)
  {dispatch(add(input))}
  else{alert('champs obligatoires')}
}

  return (
    <div className='ajout'>
      <input className='input' placeholder='ajout todo ' value={input}
      onChange={(e)=>setInput(e.target.value)}/>
      <button className='btn'  onClick={ajout} >ajouter</button>
    </div>
  )
}

export default TodoAdd
