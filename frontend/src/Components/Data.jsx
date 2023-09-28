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
            data?.property.map((e)=><div className='border-2 border-blue-800 w-[18rem]'>
                <div><img src={e.img} alt="p" className='w-[15rem] h-[8rem]'/></div>
                <p className='text-[1.1rem] font-[800]'>Name : {e.name}</p>
                <p className='text-[1.1rem] font-[800]'>Location : {e.city}</p>
                <div className='flex font-[600] gap-[1rem] ml-[1rem]'>
                    <p >{e.price}₹</p>
                    <p className='text-[#9a031e]'>{e.property_type}</p>
                    <p>{e.available}</p>
                </div>

            </div>)
        }
        </div>
      
    </div>
  )
}

export default Data
