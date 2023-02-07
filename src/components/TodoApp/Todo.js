import React, { useEffect, useState } from 'react'
import './Todo.css'
import Add from './Add'
import List from './List'

const Todo = () => {
  const [tasks, setTask] =useState([
    {title:"Learn HTML"},
    {title:"Learn Python"},
    {title:"Learn Django Framework"},
    {title:"Learn Java"},
    {title:"Learn Javascript"},
 
  ]);
useEffect(()=>{
  document.title=`You 've ${tasks.length} pending task (s)`
})
  const addTask = (title) =>{
    const newTasks= [...tasks,{title}]
    setTask(newTasks);
  }
  const removeTask = (index) =>{
    const newTask =[...tasks]
    newTask.splice(index,1)
    setTask(newTask)
  }

  return (
    <>
    <div className='todo-container' >
     <div className='header'>TODO APP</div>
     <div className='add-task'>
    <Add addTask={addTask} />
   </div>
     <div className='task'>
     {tasks.map((task,index) =>(
      <List task={task} removeTask={removeTask} index={index} key={index}/>
     ))}
  
     </div>
    </div>
    </>
   
  )
}

export default Todo
