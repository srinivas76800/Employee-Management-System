import React from 'react'

const  ComplitedTask = ({data}) => {
    return (
        <div className='h-full w-[250px] border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] rounded-lg flex-shrink-0 text-white pb-2'>
            <div className="flex justify-between items-center p-4">
                <h4 className='bg-red-600 rounded-md px-3 py-1'>{data.priority}</h4>
                <h4 className=''>{data.task_date}</h4>
            </div>
            <h2 className='p-2'>{data.task_title}</h2>
            <h3 className='p-3'>{data.category}</h3>
            <p className="text-sm mt-3 px-3">{data.task_description}</p>
        </div>
    )
}

export default ComplitedTask