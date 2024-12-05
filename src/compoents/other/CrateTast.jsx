import React from 'react'

const CrateTast = () => {
  return (
    <div className='py-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between p-12'>
          <div className='w-1/2'>
            <div>
              <h3 className=' text-2xl text-gray-400 mb-1'>Task Title</h3>
              <input className='text-white text-md py-2 px-3 mb-3 outline-none bg-transparent border-[1px] w-4/5 rounded-lg  placeholder:text-gray' type="text" placeholder='Make A UI Design' />
            </div>
            <div>
              <h3 className=' text-2xl text-gray-400 mb-1'>Date</h3>
              <input className='text-md text-gray py-2 px-3 mb-3 outline-none bg-transparent border-[1px] w-4/5 rounded-lg text-white' type="date" />
            </div>
            <div>
              <h3 className=' text-2xl text-gray-400 mb-1'>Assign to</h3>
              <input className='text-white text-md py-2 px-3 mb-3 outline-none bg-transparent border-[1px] w-4/5 rounded-lg  placeholder:text-gray' type="text" placeholder='Empolyee Name' />
            </div>
            <div>
              <h3 className=' text-2xl text-gray-400 mb-1'>Category</h3>
              <input className='text-white text-md py-2 px-3 mb-3 outline-none bg-transparent border-[1px] w-4/5 rounded-lg  placeholder:text-gray' type="text" placeholder='Design / Development / etc..' />
            </div>
          </div>
          <div className='w-2/4 flex flex-col items-start'>
            <h3 className=' text-2xl text-gray-400 mb-1'>Discription</h3>
            <textarea name="" id="" cols={50} rows={5} className='text-white mb-3 w-full text-md py-2 px-3 outline-none bg-transparent border-[1px] rounded-lg w-full h-[140px]'></textarea>
            <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 mt-4 w-full text-lg rounded-lg'>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CrateTast