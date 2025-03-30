import { AuthContext } from '@/context/AuthProvider'
import React, { useContext } from 'react'

const AllTask = () => {
    const [userData] = useContext(AuthContext)
    const employeesData = JSON.parse(userData)
    return (
        <div id='tasklist' className='w-full h-full bg-transparent mt-10  text-white'>
            <div className='flex justify-between mt-2 bg-[#2c2c4c] rounded-md p-2' >
                <h3 className='text-2xl font-semibold'>Employee name</h3>
                <p>Active</p>
                <p>completed</p>
                <p>New Task</p>
                <p>Failed</p>
            </div>
            <div>
                { employeesData.map((ele, index) => {
                    return (
                        <div className='flex justify-between mt-2 bg-[#2c2c4c] rounded-md p-2 overflow-auto ' key={index}>
                            <h3 className='text-2xl font-semibold'>{ele.name}</h3>
                            <p>{ele.task_counts.active}</p>
                            <p>{ele.task_counts.completed}</p>
                            <p>{ele.task_counts.new_task}</p>
                            <p>{ele.task_counts.failed}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default AllTask 