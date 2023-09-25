import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex gap-[2rem]'>
        <div>
          <p className='font-[800]'>City</p>
          <select  id="">
            <option value="">City</option>
            <option value="">City</option>
          </select>
        </div>
        <div></div>
        <div></div>
        <div>
        <p className='font-[800]'>City</p>
          <select  id="">
            <option value="">City</option>
            <option value="">City</option>
          </select>
        </div>
        <div>
          <button className='bg-[#03071e] text-[white] w-[8rem] h-[3rem] rounded-md'>
            Apply
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home
