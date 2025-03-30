'use client'
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const subhandeler = (e) => {
        e.preventDefault()
        handleLogin(username,password)
        setUsername('')
        setPassword('')
    }
    return (
        <div className="h-screen flex justify-center items-center bg-[url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg')] bg-cover bg-center h-full w-full">
            <form className="px-[10%] bg-transparent backdrop-blur-lg flex flex-col justify-center items-center w-[50%] h-[75%] border-0 border-blue-700 shadow-lg rounded-2xl" onSubmit={subhandeler}>
                <h1 className='text-4xl font-extrabold text-white'>Login</h1>
                <input
                    required
                    type="email"
                    placeholder='Enter User Name'
                    className='rounded-md border-2 px-3 py-2 my-3 border-white w-full bg-transparent text-white'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input
                    required
                    type="password"
                    placeholder='Enter password' 
                    className='rounded-md border-2 px-3 py-2 my-3 border-white w-full bg-transparent text-white' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input 
                    type="submit" 
                    placeholder='Login'
                    className='rounded-md bg-gray-300  px-3 py-2 my-3 w-full  border-2 border-white hover:border-black bg-transparent hover:bg-white hover:text-black transition duration-250 text-white font-bold ' 
                />
            </form>
        </div>
    )
}

export default Login