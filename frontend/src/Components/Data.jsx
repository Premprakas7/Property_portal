import React, { useEffect, useState } from 'react'
import axios from "axios"

const Data = () => {
    const [data, setData]=useState();

    useEffect(()=>{
        axios.get("https://proper.onrender.com/api/property")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)
  return (
    <div>
        <div className='m-[1rem]'>
        {
            data?.property.map((e)=><div>
                <div><img src={e.img} alt="p" /></div>

            </div>)
        }
        </div>
      
    </div>
  )
}

export default Data
