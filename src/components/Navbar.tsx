import React from 'react'
import { headerLinks } from '../constants/navbarLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex flex-row gap-12 '>
      {
        headerLinks.map((links) =>
          <Link 
          key={links.id} 
          href={links.path}
          className='text-[--txt-primary-color] font-semibold text-xl active:text-[--secondary-color]
          hover:text-[--secondary-color]'
          >
            {links.name}
          </Link>)
      }
    </nav >
  )
}

export default Navbar