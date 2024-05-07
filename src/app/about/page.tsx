import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import React from 'react'
import whoImg from '../../../public/images/who.png'

const page = () => {
    return (
        <main>
            <section className='flex flex-row px-[10%] mt-8 py-10 gap-3 h-[630px]'>
                <section className='w-1/2 h-full flex flex-col justify-between items-start'>
                    <h1 className='text-4xl uppercase font-bold text-[--primary-color]'>Quem somos</h1>
                    <p className='text-base'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        <br />
                        <br />

                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        <br />
                        <br />

                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        <br />
                        <br />

                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </section>
                <picture className='w-1/2 h-full'>
                    <Image src={whoImg} alt='farm view'  className='w-full h-full'/>
                </picture>
            </section>
            <Footer />
        </main>
    )
}

export default page