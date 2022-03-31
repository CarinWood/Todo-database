import './card.css'
import { GoTrashcan } from 'react-icons/go';
import TodoApiService from '../../utils/api/services/TodoApiService';


const Card = ({id, done, task, setData, name}) => {

    function deleteTodo(id) {
       TodoApiService.deleteTodo(id)
       .then(response => {
        setData(response.data)
       })
       .catch(error => console.log(error))
    }

  return (
    <div className='card-wrapper'>
        <p className='task'>{task}</p>
        <p className='name'>{name}</p>
        <button className='delete-btn' onClick={()=> deleteTodo(id)}><GoTrashcan/>Del</button>
    
    </div>
  )
}

export default Card