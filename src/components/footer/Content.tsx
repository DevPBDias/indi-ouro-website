import React from 'react'
import Logo from '../Logo'

const Content = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-2'>
            <Logo />
            <h5 className='text-[--txt-primary-color] font-bold italic text-xl'>
                Valoriza rebanhos
            </h5>
        </section>
    )
}

export default Content