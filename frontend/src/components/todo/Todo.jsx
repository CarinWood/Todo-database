import {useState} from 'react'
import InputArea from '../inputArea/InputArea'
import { BsPencilFill } from 'react-icons/bs';
import './todo.css'
import Card from '../card/Card';

const Todo = () => {
    const [data, setData] = useState([])

  return (
    <div className='todo-container'>
        <h1 className='todo-headline'> Todo List <BsPencilFill/></h1>
            <InputArea setData={setData}/>
            {data.map(obj => (
                    <Card 
                    key={obj._id} 
                    id={obj._id} 
                    done={obj.done} 
                    task={obj.task} 
                    setData={setData} 
                    name={obj.name} 
                    />
                
                ))}
    </div>
  )
}

export default Todo