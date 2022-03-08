import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'

export default function PostListById() {
  const params = useParams()
  const [data] = useFetch('/posts/')

  const filteredPost = data.filter(post=> post.userId == params.id)
  console.log(filteredPost);
  return (
    <div>PostListById {params.id}</div>
  )
}
