import {useState} from 'react'
import './inputArea.css'
import { IoClose } from "react-icons/io5";

const InputArea = () => {

  const [task, setTask] = useState('')
  const [name, setName] = useState('')

  function clearField() {
    setTask('')
  }


  function clearName() {
    setName('')
  }

  return (
    <div className='input-fields'>
       <input 
          className='task-input-field' 
          placeholder="Things you want to do today?" 
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        {task.length > 0 && <IoClose className='delete-input-text' onClick={clearField}/>}


       <input 
          className='name-input-field' 
          placeholder="Your name" type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
       />
        {name.length > 0 && <IoClose className='delete-input-name' onClick={clearName}/>}


       <button className='add-btn'>Add</button>
    </div>
  )
}

export default InputArea