import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div>
        <div className="flex flex-wrap gap-4 text-white text-3xl font-medium p-3 overflow-hidden justify-center">
          <div className='flex flex-col px-4 py-5 mt-5 w-1/3 overflow-hidden border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] text-gray-300 p-6 rounded-lg'>
            <h2 className=''> {data.task_counts.completed} </h2>
            <div>completed</div>
          </div>
          <div className='flex flex-col px-4 py-5 mt-5 w-1/3 overflow-hidden border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] text-gray-300 p-6 rounded-lg'>
            <h2 className=''> {data.task_counts.new_task} </h2>
            <div>New Task</div>
          </div>
          <div className='flex flex-col px-4 py-5 mt-5 w-1/3 overflow-hidden border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] text-gray-300 p-6 rounded-lg'>
            <h2 className=''> {data.task_counts.active} </h2>
            <div>Active</div>
          </div>
          <div className='flex flex-col px-4 py-5 mt-5 w-1/3 overflow-hidden border-0 border-black [box-shadow:0px_0px_15px_rgba(0,0,0,1.5)] bg-[#2c2c4c] text-gray-300 p-6 rounded-lg'>
            <h2 className=''> {data.task_counts.failed} </h2>
            <div>Failed</div>
        </div>
    </div> 
    </div>
  )
}

export default TaskListNumbers 