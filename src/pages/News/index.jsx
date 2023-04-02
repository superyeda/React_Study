import React from 'react'
import { useParams } from 'react-router-dom'
export default function News() {
  const params = useParams()
  return (
    // 
    <div>
      路由params传参
      <div>{params.id}
        <br />
        {params.message}</div>
    </div>
  )
}
