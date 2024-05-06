import React from 'react'
import Content from './Content'
import ContactFooter from './ContactFooter'
import Midia from './Midia'
import Copyright from './Copyright'

const Footer = () => {
    return (
        <footer>
            <section>
                <Content />
                <ContactFooter />
                <Midia />
            </section>
            <Copyright />
        </footer>
    )
}

export default Footer