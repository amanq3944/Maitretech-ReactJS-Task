import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()
  const [fname, setFname] = useState('')
  const [username, setUsername] = useState('') // email
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle register form submit
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, fname, password }),
    });

    const data = await response.json();
    console.log("Register response:", data);

    if (response.ok) {
      // ✅ Optional: Save token only if it exists
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      toast.success("User registered successfully!");
      
      // ✅ Clear form fields
      setFname("");
      setUsername("");
      setPassword("");

      // ✅ Redirect after short delay
      setTimeout(() => navigate("/login"), 1000);
    } else {
      toast.error(data.message || "Registration failed");
    }
  } catch (error) {
    console.error("Error:", error.message);
    toast.error("Something went wrong while registering");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen'>
      {/* Navbar */}
      <nav className='bg-blue-500 text-white w-full flex justify-start items-center gap-10 min-h-14 font-sans fixed top-0'>
        <div className='flex justify-center items-center ml-5 gap-2'>
          <img
            className='size-8 brightness-0 invert'
            src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg"
            alt="logo"
          />
          <h1 className='text-xl'>Food's Restaurant</h1>
        </div>
        <div className='space-x-5'>
          <button onClick={() => navigate('/register')} className='cursor-pointer text-xl'>
            Sign
          </button>
          <button onClick={() => navigate('/login')} className='cursor-pointer text-xl'>
            Login
          </button>
        </div>
      </nav>

      {/* Register Form */}
      <div className='pt-20'>
        <form
          onSubmit={handleSubmit}
          className='py-10 px-5 flex flex-col w-86 shadow-2xl border border-gray-300 space-y-3 rounded font-sans'
        >
          <h1 className='text-2xl text-gray-900 font-sans text-center font-semibold'>Register</h1>

          <div className='flex flex-col space-y-1.5'>
            <label htmlFor="fname">Full Name</label>
            <input
              name='fname'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              placeholder='Enter your name'
              className='outline-0 py-0.5 px-1 rounded border border-gray-300'
              required
            />
          </div>

          <div className='flex flex-col space-y-1.5'>
            <label htmlFor="email">Email Address</label>
            <input
              name='email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder='Enter your email'
              className='outline-0 py-0.5 px-1 rounded border border-gray-300'
              required
            />
          </div>

          <div className='flex flex-col space-y-1.5'>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Enter your password'
              className='outline-0 py-0.5 px-1 rounded border border-gray-300'
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className='text-white rounded bg-blue-500 min-h-8 outline-0 hover:bg-blue-600 disabled:bg-gray-400'
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <div className='flex justify-center items-center gap-2'>
            <h1>Already registered?</h1>
            <button
              type="button"
              className='underline text-blue-800 cursor-pointer'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register