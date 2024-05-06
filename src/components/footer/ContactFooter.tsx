import { footerLinks } from '@/constants/contactFooter'
import Image from 'next/image'
import React from 'react'

const ContactFooter = () => {
    return (
        <section className='flex flex-col justify-between items-start justify-items-center gap-3'>
            <h3 className='font-semibold text-base uppercase text-[--secondary-color]'
            >Fale conosco</h3>
            {
                footerLinks.map((links) => (
                    <div className='flex flex-row gap-2 items-center'>
                        <Image src={links.icon} alt={links.description} />
                        <p className='text-sm text-[--txt-primary-color]'
                        >{links.value}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default ContactFooter