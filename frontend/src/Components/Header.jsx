import React from 'react'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#0d1321] h-[4rem] border-2'>
        <div className=' flex'>
            <div>
                <p className='text-[2rem] text-[white] font-[800] ml-[1rem]'>Property</p>
            </div>

            <div className='mt-[.5rem] '>
               <Link to="/register">
                <button className=' text-[white] rounded h-[2rem] w-[5rem]'>Register</button>
                </Link> 
               <Link to="login">
                 <button className='text-[white] ml-[1rem] rounded h-[2rem] w-[5rem]'>Login</button>
                 </Link>
            </div>

        </div>
      
    </div>
  )
}

export default Header
