import './card.css'
import { GoTrashcan } from 'react-icons/go';
import TodoApiService from '../../utils/api/services/TodoApiService';
import { FaRegEdit } from "react-icons/fa";
import {useState} from 'react'
import EditWindow from '../editWindow/EditWindow';
import { BsCheckLg } from "react-icons/bs";


const Card = ({id, done, task, setData, name}) => {

    const [editMode, setEditMode] = useState(false)
   
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
      const object = {
        'done': true
      }

      TodoApiService.updateDone(id, object)
      
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
    }


    function updateDoneAgain(id) {
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
    
        {done === 'false' && <BsCheckLg className='point' onClick={()=> updateDone(id)} />}
        {done === 'true' && <BsCheckLg className='checkmark' onClick={() => {updateDoneAgain(id)}} />}
       
     
     
        <p className={done === 'true' ? ' linethrough task' : 'task'}  >{task}</p>
        <p className='name'>{name}</p>
        <button className='edit-btn' onClick={editTask}><FaRegEdit/>Edit</button>
        <button className='delete-btn' onClick={()=> deleteTodo(id)}><GoTrashcan/>Del</button>

        {editMode === true && <EditWindow setEditMode={setEditMode} setData={setData} id={id} task={task}/> }
    </div>
  )
}

export default Card