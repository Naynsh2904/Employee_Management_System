import React, { useState } from 'react';

const login = ({HandleLogin}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault();
    HandleLogin(email, password)
    console.log("Email :", email)
    console.log("Password :", password)

    setemail("")
    setpassword("")
  }
  return (
    <>
      <div className='flex h-screen w-screen justify-center items-center'>
        <div className="border-2 p-20 border-emerald-700 rounded-xl">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
            className='flex flex-col justify-center items-center'>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }}
              required className='outline-none text-white text-bold bg-transparent text-xl border-2 border-emerald-300 rounded-xl py-4 px-12 mb-5 placeholder:text-emerald-300' type="email" placeholder='Enter Your Email' />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              required className='outline-none text-white text-bold bg-transparent text-xl border-2 border-emerald-300 rounded-xl py-4 px-12 mb-5 placeholder:text-emerald-300' type="password" placeholder='Enter your password' />
            <button className='text-xl text-white bg-emerald-400 px-8 py-4 rounded-xl'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default login