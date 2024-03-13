import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const authUser = parseInt(localStorage.getItem('authorize'))
  return authUser === 200 ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
