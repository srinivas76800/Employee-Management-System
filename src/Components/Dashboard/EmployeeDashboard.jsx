import Header from '@/Other/Header'
import TaskListNumbers from '@/Other/TaskListNumbers'
import React from 'react'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="h-full bg-[url('https://i.pinimg.com/736x/cf/8a/5b/cf8a5bee30b432bc0954bf8d348e7d06.jpg')] bg-cover bg-center h-full w-full p-5">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard 