import Footer from '@/components/footer/Footer'
import React from 'react'
import Text from '@/components/about/Text'
import Image from 'next/image'
import whoBanner from '../../../public/images/whoBanner.jpeg'

const About = () => {
    return (
        <main>
            <Image src={whoBanner} alt='banner who' />
            <Text />
            <Footer />
        </main>
    )
}

export default About