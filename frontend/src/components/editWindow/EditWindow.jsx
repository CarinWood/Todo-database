import {useState} from 'react'
import TodoApiService from '../../utils/api/services/TodoApiService'
import './editWindow.css'
import { IoClose } from "react-icons/io5";

const EditWindow = ({setEditMode, setData, id, task}) => {

    const [newTask, setNewTask] = useState(task)

    function setNewTodoTask(id, newTask) {
      const task = {
        'task': newTask
      }
        TodoApiService.updateTask(id, task)
        .then(response => {
            setData(response.data)     
        })
        .catch(error => console.log(error))
        setEditMode(false)  
    }
    

  return (
    <div className='window-wrapper'>
        <p className="update-text">Update task:</p>
        <input
            className='update-task-field'
            onChange={e => setNewTask(e.target.value)} 
            type="text"
            value={newTask}
        /> 

          {newTask.length > 0 && <IoClose className='reset-field' onClick={() => setNewTask('')}/>} 
        
        <button onClick={()=>setNewTodoTask(id, newTask)} className='dont-btn'>Done</button>
    </div>
  )
}

export default EditWindow