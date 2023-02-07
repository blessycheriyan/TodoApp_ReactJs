import React, { useEffect } from 'react'
import { useState } from 'react';

const Effects = () => {
    const [posts,setPost] = useState([]);
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(posts => setPost(posts.slice(0,10)))
    },[])
   
  return (
    <div>
      <h1 className='bg-primary text-white'>Fetch api</h1>
      { posts.map((post)=>
      <div>
      <h1 className='bg-success'>{post.id}</h1>
        <h1 className='bg-dark text-white'>Title:{post.title}</h1>
        <h1 className='bg-success'>Body:{post.body}</h1>
      </div>
        
      )}
    </div>
  )
}

export default Effects
