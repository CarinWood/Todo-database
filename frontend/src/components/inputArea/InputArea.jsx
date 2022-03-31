import {useState} from 'react'
import './inputArea.css'
import { IoClose } from "react-icons/io5";
import TodoApiService from '../../utils/api/services/TodoApiService';

const InputArea = ({setData}) => {
 
  const [task, setTask] = useState('')
  const [name, setName] = useState('')

  function clearField() {
    setTask('')
  }


  function clearName() {
    setName('')
  }

  function addTask() {

    const newTodo = {
      'name': name,
      'task': task,
      'done': false,
    }

    TodoApiService.createTodo(newTodo)
    .then(response => {
      setData(response.data)
      
    

    })
    .catch(error => console.log(error))

    clearAllFields()
  }

  function clearAllFields() {
    setName('')
    setTask('')
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


       <button className='add-btn' onClick={addTask}>Add</button>
   
      
    </div>
  )
}

export default InputArea