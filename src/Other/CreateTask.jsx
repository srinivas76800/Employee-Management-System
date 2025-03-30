'use client'
import { AuthContext } from '@/context/AuthProvider' 
import React, { useContext, useState } from 'react'

const CreateTask = () => {

    const [userData,setUserData]= useContext(AuthContext)

    const [task_title, setTaskTitle] = useState('')
    const [task_date, setDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [task_category, setCategory] = useState('')
    const [task_description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [SetnewData, setSetnewData] = useState({})
    
    const formHavdeler = (e) =>{
        e.preventDefault()
        setSetnewData({task_title,task_date,task_category,priority,task_description, avtive:false, completed:false , failed:true, acceptTask:false })

        const newDataOfEmployee = JSON.parse(userData)

        newDataOfEmployee.map((e)=>{
            if(asignTo == e.name){
                e.tasks.push(SetnewData)
                e.task_counts.new_task = e.task_counts.new_task + 1
            }}
        )
        setUserData( JSON.stringify(newDataOfEmployee))
        console.log(newDataOfEmployee)
        
        // setTaskTitle('')
        // setDate('')
        // setCategory('')
        // setAsignTo('')
        // setDescription('')
      
    }
    return (
        <div className='flex justify-center  mt-10'>
            <form className='flex justify-between border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] w-[90%] text-gray-300 p-6 rounded-lg' onSubmit={formHavdeler}>
                <div className='w-[45%]'>
                    <div>
                        <h3 className=' text-xl font-semibold p-1'>Task Title</h3>
                        <input 
                            type="text" 
                            placeholder='Enter here task title...' 
                            className='bg-transparent border w-full px-2 py-1 border-white rounded' 
                            onChange={(e)=> setTaskTitle(e.target.value)}
                            value={task_title}
                            />
                    </div>
                    <div>
                        <h3 className=" text-xl font-semibold p-1">Date</h3>
                        <input 
                            type="date" 
                            className='bg-transparent border w-full px-2 border-white rounded' 
                            onChange={(e)=> setDate(e.target.value)}
                            value={task_date}
                        />
                    </div>
                    <div>
                        <h3 className=' text-xl font-semibold p-1'>Asign to</h3>
                        <input 
                            type="text"
                            placeholder='Employee name' 
                            className='bg-transparent border w-full px-2 py-1 border-white rounded'
                            onChange={(e)=> setAsignTo(e.target.value)}
                            value={asignTo}
                        />
                    </div>
                    <div>
                        <h3 className=' text-xl font-semibold p-1'>Category</h3>
                        <input 
                            type="text" 
                            placeholder='design, dev, ai, etc'
                            className='bg-transparent border w-full px-2  py-1 border-white rounded' 
                            onChange={(e)=> setCategory(e.target.value)}
                            value={task_category}
                        />
                    </div>
                    <div>
                        <h3 className=' text-xl font-semibold p-1'>Priority</h3>
                        <input 
                            type="text" 
                            placeholder='Low, Mudiam, High'
                            className='bg-transparent border w-full px-2  py-1 border-white rounded' 
                            onChange={(e)=> setPriority(e.target.value)}
                            value={priority}
                        />
                    </div>
                </div>
                <div className='w-[45%]'>
                    <div>
                        <h3 className=' text-xl font-semibold p-1'>Description</h3>
                        <textarea 
                            name="textarea" 
                            id="" 
                            col='30' 
                            rows='8' 
                            className='bg-transparent border w-full px-2  py-1 border-white rounded'
                            onChange={(e)=> setDescription(e.target.value)}
                            value={task_description}
                        ></textarea>
                    </div>
                    <button className='bg-white text-black border w-full px-2 py-1 hover:bg-[#2c2c4c] hover:text-white transition duration-250 rounded'>Create task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask