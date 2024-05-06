import React from 'react'
import Content from './Content'
import ContactFooter from './ContactFooter'
import Midia from './Midia'
import Copyright from './Copyright'

const Footer = () => {
    return (
        <footer className='bg-[--primary-color] w-full px-[10%] fixed bottom-0 left-0 py-4'>
            <section className='flex flex-row justify-between py-2'>
                <Content />
                <ContactFooter />
                <Midia />
            </section>
            <Copyright />
        </footer>
    )
}

export default Footer