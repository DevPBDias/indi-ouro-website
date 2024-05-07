import Footer from '@/components/footer/Footer'
import React from 'react'
import Text from '@/components/about/Text'
import FarmImage from '@/components/about/FarmImage'

const About = () => {
    return (
        <main>
            <section className='flex flex-row px-[10%] mt-8 py-10 gap-3 h-[630px]'>
                <Text />
                <FarmImage />
            </section>
            <Footer />
        </main>
    )
}

export default About