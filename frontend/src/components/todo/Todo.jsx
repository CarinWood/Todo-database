import {useState} from 'react'
import InputArea from '../inputArea/InputArea'
import { BsPencilFill } from 'react-icons/bs';
import './todo.css'

const Todo = () => {
    const [data, setData] = useState([])

  return (
    <div className='todo-container'>
        <h1 className='todo-headline'> Todo List <BsPencilFill/></h1>
            <InputArea/>
    </div>
  )
}

export default Todo