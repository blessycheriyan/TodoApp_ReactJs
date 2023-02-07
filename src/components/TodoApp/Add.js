import React, { useState } from 'react'

const Add = ({addTask}) => {
  const[value, setValue]=useState("");

const addItems =() =>{
  addTask(value);
  setValue("")
}


  return (
    <>
    <div className='input-container'>
    <input type="text" className='input' placeholder='Add a new task'
     value={value} onChange={(e) => {setValue(e.target.value)}}
     />
     <button onClick={addItems} className='add-btn'>ADD</button>
    </div>
    </>
    
  )
}

export default Add
