import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import IconsBar from './IconsBar'

const Header = () => {
    return (
        <header className='bg-[--primary-color] h-24 px-[10%]'>
            <section className='flex flex-row justify-between items-center h-full'>
                <Logo />
                <Navbar />
                <IconsBar />
            </section>
        </header>
    )
}

export default Header