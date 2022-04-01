import './card.css'
import { GoTrashcan } from 'react-icons/go';
import TodoApiService from '../../utils/api/services/TodoApiService';
import { FaRegEdit } from "react-icons/fa";
import {useState} from 'react'
import EditWindow from '../editWindow/EditWindow';
import { BsCheckLg } from "react-icons/bs";




const Card = ({id, done, task, setData, name}) => {

    const [editMode, setEditMode] = useState(false)
    const [isDone, setIsDone] = useState(false)

    function deleteTodo(id) {
       TodoApiService.deleteTodo(id)
       .then(response => {
        setData(response.data)
       })
       .catch(error => console.log(error))
    }

    function editTask() {
        setEditMode(true)
        
    }

    function updateDone(id) {
      setIsDone(true)
      const object = {
        'done': true
      }

      TodoApiService.updateDone(id, object)
      
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
     
    }




    function updateDoneAgain(id) {
      setIsDone(false)
      
      
      const object = {
        'done': false
      }

      TodoApiService.updateDone(id, object)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
     
    }
    



  return (
    <div className='card-wrapper'>
    
        {isDone === false 
        ? <BsCheckLg className='point'  onClick={()=> updateDone(id)}/> 
        : <BsCheckLg className="checkmark" onClick={() => {updateDoneAgain(id)}}/> }
      
     
        <p className={isDone === true ? 'task linethrough' : 'task'}  >{task}</p>
        <p className='name'>{name}</p>
        <button className='edit-btn' onClick={editTask}><FaRegEdit/>Edit</button>
        <button className='delete-btn' onClick={()=> deleteTodo(id)}><GoTrashcan/>Del</button>

        {editMode === true && <EditWindow setEditMode={setEditMode} setData={setData} id={id} task={task}/> }
    
    </div>
  )
}

export default Card