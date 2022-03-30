import React from 'react'
import './inputArea.css'

const InputArea = () => {
  return (
    <div className='input-fields'>
       <input className='task-input-field' placeholder="Things you want to do today?" type="text" />
       <input className='name-input-field' placeholder="Your name" type="text" />
       <button className='add-btn'>Add</button>
    </div>
  )
}

export default InputArea