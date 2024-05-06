import React from 'react'
import { headerLinks } from '../constants/navbarLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      {
        headerLinks.map((links) =>
          <Link key={links.id} href={links.path}>
            {links.name}
          </Link>)
      }
    </nav >
  )
}

export default Navbar