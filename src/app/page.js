'use client'
import { useContext, useEffect, useState } from "react";
import Login from "@/Components/Auth/Login";
import EmployeeDashboard from "@/Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "@/Components/Dashboard/AdminDashboard";
import { AuthContext } from "@/context/AuthProvider";

export default function Home() {
  const [user, setUser] = useState(null)
  const [loginData, setLoginData] = useState(null)
  const [userData] = useContext(AuthContext)
  const authData = JSON.parse(userData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const {role,data} = JSON.parse(loggedInUser)
      setUser(role)
      setLoginData(data)
    }
  }, [])

  const handleLogin = (email,password) =>{
    if(email === 'admin@e.com' && password === '123'){
      setUser('admin')
      setLoginData('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.find((e)=> e.email === email && e.password === password )
      setUser('employee')
      setLoginData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }else{
      alert('invalid details')
    } 
  }
   return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : null}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loginData}/> : user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loginData}/> : null } 
    </>
  );
}