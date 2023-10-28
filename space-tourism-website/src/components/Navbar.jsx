import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    console.log(mobileMenu)
  }, [mobileMenu])

  return (
    <header>
      <nav className={`nav ${mobileMenu ? 'show' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
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
