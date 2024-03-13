import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HomeIcon from '@mui/icons-material/Home'

const Navigation = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/register') {
      return setIsVisible(false)
    } else return setIsVisible(true)
  }, [location])

  return (
    <nav
      className={`relative top-0 left-0 py-5 mb-7 w-11/12 mx-auto z-10  ${
        isVisible ? 'flex' : 'hidden'
      }  items-center justify-between`}
    >
      <div className="inline-flex items-center gap-2">
        <img src="/assets/logo.png" width={32} alt="Logo" />
        <h2 className="font-semibold">Mini Application Recognition System</h2>
      </div>
      <ul className="flex justify-between items-center gap-7 list-none">
        <li>
          <NavLink
            to="/mars-reviewer"
            className="inline-flex items-center hover:text-primary"
          >
            <HomeIcon /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="inline-flex items-center hover:text-primary"
          >
            <DashboardIcon /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="inline-flex items-center hover:text-primary"
          >
            <ManageAccountsIcon /> profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="inline-flex items-center hover:text-primary"
          >
            <LogoutIcon /> logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
