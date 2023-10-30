import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [active, setActive] = useState(
    window.location.pathname.replace('/', '') || 'home'
  )

  const location = useLocation()

  // console.log(location)

  const closeMenu = () => {
    setMobileMenu(false)
  }

  useEffect(() => {
    setActive(
      location.pathname.replace('/', '')
        ? location.pathname.replace('/', '')
        : 'home'
    )
  }, [location])

  return (
    <header>
      <nav className={`nav ${mobileMenu ? 'show' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className={`ul ${active}`}>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/destination">Destination</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/crew">Crew</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>

        <div className="burger">
          <img
            src={mobileMenu ? close : hamburger}
            alt="burger"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
      </nav>
    </header>
  )
}
export default Navbar
