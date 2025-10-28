import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate()

    useEffect(() => {
                const token = localStorage.getItem('token')
                if (!token) {
                    navigate('/login')
                }
            }, [navigate])

    return (
        <div className='font-sans min-h-screen w-full flex flex-col justify-center items-center'>
            <nav className="bg-blue-800 text-white w-full flex justify-between items-center px-10 py-4 fixed top-0 shadow-xl z-10">
                <div className="flex items-center gap-3">
                    <img
                        className="size-8 brightness-0 invert"
                        src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg"
                        alt=""
                    />
                    <h1 className="text-2xl font-semibold">Food's Restaurant</h1>
                </div>
            </nav>
            <div className='shadow-2xl w-[1000px] border-b border-gray-200 px-10 py-5 space-y-3'>
                <h1 className='text-4xl text-center text-gray-800'>Checkout</h1>
                <h1 className='text-2xl text-gray-600'>Thank you for your order.</h1>
            </div>
        </div>
    )
}

export default Checkout