import React, { useContext, useEffect, useState } from 'react';
import "./App.css";

import Login from "./compoents/Auth/login.jsx";
import AdminDashboard from "./compoents/Dasboard/AdminDasboard.jsx";
import EmpolyeeDashboard from "./compoents/Dasboard/EmpolyeeDashboard.jsx";
import { AuthContext } from './context/AuthProvider.jsx';

function App() {


  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData)

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData])


  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345") {
      setUser("Admin")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Admin' }))
    } else if ((authData?.Empolyee?.find((e) => email === e.email && password === e.password))) {
      setUser("Empolyee")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Empolyee' }))
    } else {
      alert("Invalid Email & Password")
    }
  }

  return (
    <>
      {user ? (user === 'Admin' ? <AdminDashboard /> : <EmpolyeeDashboard />) : <Login HandleLogin={HandleLogin} />}
    </>
  )
}
export default App;