import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()
  const [fname, setFname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername(''), setPassword('')
  }

  const submitHandler = () => {
    console.log({ username }, { password })
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,

        // username: 'emilys',
        // password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
      .then(res => res.json())
      .then((data) => {
        console.log({ data })
        if (data?.accessToken) {
          localStorage.setItem('token', data?.accessToken)
          navigate('/home')
        }
      })
      .catch((err) => console.error('error msg:', err.message))
  }

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <nav className='bg-blue-500 text-white w-full flex justify-start items-center gap-10 min-h-14 font-sans fixed top-0'>
          <div className='flex justify-center items-center ml-5 gap-2 fill-blue-500'>
            <img className='size-8 brightness-0 invert' src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg" alt="" />
            <h1 className='text-xl'>Food's Restaurant</h1>
          </div>
          <div className='space-x-5'>
            <button onClick={() => navigate('/register')} className='cursor-pointer text-xl'>Sign</button>
            <button onClick={() => navigate('/login')} className='cursor-pointer text-xl'>Login</button>
          </div>
        </nav>
        <div className=''>
          <form onSubmit={handleSubmit} className='py-10 px-5 flex flex-col w-86 shadow-2xl border border-gray-300 space-y-3 rounded font-sans'>
            <h1 className='text-2xl text-gray-900 font-sans text-center font-semibold'>Register</h1>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor="fname">Full Name</label>
              <input name='fname' value={fname} onChange={(e) => { setFname(e.target.value) }} type="text" placeholder='Enter your name' className='outline-0 py-0.5 px-1 rounded border border-gray-300' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor="email">Email Address</label>
              <input name='email' value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter your email' className='outline-0 py-0.5 px-1 rounded border border-gray-300' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Enter your password' className='outline-0 py-0.5 px-1 rounded border border-gray-300' />
            </div>
            <button onClick={submitHandler} className='text-white rounded bg-blue-500 min-h-8 outline-0'>Register</button>
            <div className='flex justify-center items-center gap-2'>
              <h1>
                Already registered?
              </h1>
              <button className='underline text-blue-800 cursor-pointer' onClick={() => navigate('/login')}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register