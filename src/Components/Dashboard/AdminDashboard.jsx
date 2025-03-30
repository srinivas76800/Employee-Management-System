'use client'
import AllTask from '@/Other/AllTask'
import CreateTask from '@/Other/CreateTask'
import Header from '@/Other/HeaderAdmin'
import React from 'react'

const AdminDashboard = (props) => {

  return (
    <div className="h-full bg-[url('https://i.pinimg.com/736x/cf/8a/5b/cf8a5bee30b432bc0954bf8d348e7d06.jpg')] bg-cover bg-center h-full w-full p-5">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask data={props.data}/>
      <AllTask data={props.data}/>
    </div>
  )
}

export default AdminDashboard 