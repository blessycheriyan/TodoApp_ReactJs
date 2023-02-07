import React from 'react'

const List = ({task,removeTask,index}) => {
  return (
    <div>
    <div className='list-task'>
   {task.title}
<button onClick={() =>{removeTask(index)}} className='delete-btn'>Delete</button>
    </div>
      
    </div>
  )
}

export default List
