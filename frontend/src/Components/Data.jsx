import React, { useEffect, useState } from 'react'
import axios from "axios"

const Data = () => {
    const [data, setData]=useState();

    useEffect(()=>{
        axios.get("")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)
  return (
    <div>
        <div className='m-[1rem]'>
        data
        </div>
      
    </div>
  )
}

export default Data
