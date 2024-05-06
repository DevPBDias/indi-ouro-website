import { footerLinks } from '@/constants/contactFooter'
import Image from 'next/image'
import React from 'react'

const ContactFooter = () => {
    return (
        <section>
            <h3>Fale conosco</h3>
            {
                footerLinks.map((links) => (
                    <div>
                        <Image src={links.icon} alt={links.description} />
                        <p>{links.value}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default ContactFooter