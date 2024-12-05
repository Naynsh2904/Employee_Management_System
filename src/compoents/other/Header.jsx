import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='font-medium text-2xl'>Hello <br /> <span className="text-3xl font-bold">Nayan 👋</span></h1>
        <button className='font-medium text-2xl bg-red-600 px-4 py-2 rounded-xl text-white '>Log Out</button>
      </div>
    </>
  )
}

export default Header