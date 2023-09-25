import React from 'react'
import {useParams } from 'react-router-dom'

const Post = () => {
 
  const { url ,id} = useParams()
  console.log(url,id)


  return (
    <div>
      <h1>{url}</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default Post