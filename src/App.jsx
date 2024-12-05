import React, {useState} from 'react';
import "./App.css";

import Login from "./compoents/Auth/login.jsx";
import AdminDashboard from "./compoents/Dasboard/AdminDasboard.jsx"
import EmpolyeeDashboard from "./compoents/Dasboard/EmpolyeeDashboard.jsx"

function App() {
  const [user, setUser] = useState(null)

  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345"){
      setUser("Admin")
    } else if (email == "user@me.com" && password == "12345"){
      setUser("Empolyee")
    } else {
      alert("Invalid")
    }
  }

  // useEffect(() => {
  // SetLocalStorage()
  //   GetLocalStorage()
  // },)

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin}/> : ''}
      {user === 'Admin' ? <AdminDashboard /> : <EmpolyeeDashboard />}
    </>
  )
}
export default App;