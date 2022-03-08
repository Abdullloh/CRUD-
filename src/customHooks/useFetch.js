import React, { useEffect, useState } from 'react'
import Axios from '../utils/axios'

export default function useFetch(url) {
    const [data,setData] = useState([])
    const fetchData =   async () =>{
        try {
            const res = await Axios.get(url)
            if(res.status == 200){
                const {data} = res;
                setData(data)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[url])
  return [data]
}
