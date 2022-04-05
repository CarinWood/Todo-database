import {useState} from 'react'
import './inputArea.css'
import { IoClose } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import TodoApiService from '../../utils/api/services/TodoApiService';

const InputArea = ({setData}) => {
 
  const [task, setTask] = useState('')
  const [name, setName] = useState('')
  const [all, setAll] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [uncompleted, setUncompleted] = useState(false)

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
      'done': 'false',
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

  function showAll() {
    setAll(true)
    setUncompleted(false)
    setCompleted(false)

    TodoApiService.getAll()
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))

  }

  function showCompleted() {
    setCompleted(true)
    setAll(false)
    setUncompleted(false)

    TodoApiService.getCompleted()
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))
  }
 
  function showUncompleted() {
    setCompleted(false)
    setAll(false)
    setUncompleted(true)

    TodoApiService.getUncompleted()
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))

  }

  return (
    <div className='input-fields' data-testid='first-div'>
      <div className='input-area'>
       <input 
          data-testid="taskInput"
          className='task-input-field' 
          placeholder="Things you want to do today?" 
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        {task.length > 0 && <IoClose className='delete-input-text' onClick={clearField}/>}


       <input
          data-testid='name-input' 
          className='name-input-field' 
          placeholder="Your name" type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
       />
        {name.length > 0 && <IoClose className='delete-input-name' onClick={clearName}/>}


       <button data-testid="btn" className='add-btn' onClick={addTask}>Add</button>
       </div>

       <div className='select-area'> 
        <p className='show'>Show:</p>
        
        <section className='all-section'>
            <div className='all-box' onClick={() => showAll()}>{all && <BsCheck className='boxcheck'/>}</div>
            <p className='boxtext'>All</p>
        </section>

        <section className='completed-section'>
            <div className='completed-box' onClick={() => showCompleted()}>{completed && <BsCheck className='boxcheck'/>}</div>
            <p className='boxtext'>Completed</p>
        </section>

        <section className='uncompleted-section'>
            <div className='uncompleted-box' onClick={() => showUncompleted()}>{uncompleted && <BsCheck className='boxcheck'/>}</div>
            <p className='boxtext'>Uncompleted</p>
        </section>

       </div>
   
      
    </div>
  )
}

export default InputArea