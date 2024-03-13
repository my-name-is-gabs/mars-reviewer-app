import { createContext, useMemo, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authUser] = useState(() =>
    localStorage.getItem('authorize') ? localStorage.getItem('authorize') : null
  )

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
