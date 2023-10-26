import { NavLink } from 'react-router-dom'

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: 'destination', text: 'Destination' },
  { id: 3, url: 'crew', text: 'Crew' },
  { id: 4, url: 'technology', text: 'Technology' },
]

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id}>
            <NavLink className="capitalize lg:ml-5" to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}
export default NavLinks
