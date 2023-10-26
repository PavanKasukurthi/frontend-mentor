import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useEffect, useState } from 'react'
import { NavLinks } from './index'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    console.log(mobileMenu)
  }, [mobileMenu])

  return (
    <>
      <nav className="navbar px-6 bg-transparent">
        <div className="navbar-start">
          <img src={logo} alt="logo" className="bg-transparent" />
        </div>
        <div className="navbar-end">
          <img
            src={mobileMenu ? `${close}` : `${hamburger}`}
            alt="hamburger"
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className="h-full flex justify-end px-6 md:hidden">
        <ul>
          <NavLinks className="links flex flex-col" />
        </ul>
      </div>
    </>
  )
}
export default Navbar
