import React  from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch'

export default function PostList() {
  const [data] = useFetch('/users')
  const navigate = useNavigate()
  return (
    <div>
      {data.map(users=>{
        const {id,name} = users
        return(
          <ul key={id}>
            <li onClick={()=> navigate(`/post-list/${id}`)}>{name}</li>
          </ul>
        )
      })}
    </div>
  )
}
