import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ffffff' : '#d3d3d3',
  })

  return (
    <nav className="flex h-48 w-full items-center justify-center bg-indigo-500 text-4xl">
      <ul className="flex flex-nowrap gap-5 rounded-lg bg-indigo-600 p-5 shadow-inner">
        <li>
          <NavLink
            to="movies"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Filmer
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/movies" style={linkStyle}>
            Filmer
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/actors" style={linkStyle}>
            Skuespillere
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
