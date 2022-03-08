import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'

export default function PostListById() {
  const params = useParams()
  const [data] = useFetch(`/posts/${params.id}`)
  return (
    <div>PostListById {params.id}</div>
  )
}
