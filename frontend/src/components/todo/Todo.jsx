import {useState} from 'react'
import InputArea from '../inputArea/InputArea'
import { BsPencilFill } from 'react-icons/bs';
import './todo.css'

const Todo = () => {
    const [data, setData] = useState([])

  return (
    <div className='todo-container'>
        <h1 className='todo-headline'> Todo List <BsPencilFill/></h1>
            <InputArea setData={setData}/>
            {data.map(obj => (
         <h1>{obj.task}</h1>
       ))}
    </div>
  )
}

export default Todo