import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const closeMenu = () => {
    setMobileMenu(false)
  }

  return (
    <header>
      <nav className={`nav ${mobileMenu ? 'show' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li onClick={closeMenu} className="active">
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
