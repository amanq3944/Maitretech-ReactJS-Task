import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    console.log(data)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-10 min-h-screen'>
            <nav className='bg-blue-800 text-white w-full flex justify-start items-center gap-10 min-h-15 font-sans shadow-2xl fixed top-0'>
                <div className='flex justify-center items-center ml-5 gap-3 fill-blue-500 shadow-2xl'>
                    <img className='size-8 brightness-0 invert' src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg" alt="" />
                    <h1 className='text-2xl font-semibold'>Food's Restaurant</h1>
                </div>
            </nav>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-7xl font-light flex flex-col justify-center items-center'>Welcome to Food's <span>Kitchen</span></h1>
                <button onClick={() => navigate('/menu')} className='bg-blue-800 text-white font-semibold px-4 py-1 shadow-2xl rounded font-sans'>GO TO MENU</button>
            </div>
            <div className='w-full fixed bottom-0'>
                <button onClick={handleLogout} className='w-full py-2 border-black text-2xl bg-blue-800 text-white font-bold rounded'>Logout</button>
            </div>
        </div>
    )
}

export default Home