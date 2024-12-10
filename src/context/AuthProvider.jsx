import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage } from '../util/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const { Empolyee, Admin } = GetLocalStorage();
    setuserData({ Empolyee, Admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider