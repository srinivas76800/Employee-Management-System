import React from 'react'
import AcceptTask from './AcceptTask'
import ComplitedTask from './ComplitedTask'
import Failed from './Failed'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
    return (
        <>
            <div id='tasklist' className='h-full overflow-x-auto my-10 flex justify-start w-full flex-nowrap gap-5'>
                {data.tasks.map((e,index)=>{
                    if(e.active){
                       return <AcceptTask key={index} data={e}/>
                    }if(e.completed){
                       return <ComplitedTask key={index} data={e}/> 
                    }if(e.failed){
                       return <Failed key={index} data={e}/> 
                    }if(e.new_task){
                       return <NewTask key={index} data={e}/> 
                    }
                })}
            </div>
        </>
    )
}   
export default TaskList 