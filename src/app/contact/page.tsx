import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import React from 'react'
import blueEmail from '../../../public/icons/blueEmail.png'
import blueWpp from '../../../public/icons/blueWpp.png'
import blueLocation from '../../../public/icons/blueLocation.png'
import map from '../../../public/images/map.png'

const Contact = () => {
  return (
    <main>
      <section className='flex flex-col px-[10%] my-8 py-10 gap-3 h-[638px]'>
        <h1 className='text-4xl uppercase font-bold text-[--primary-color]'>Entre em contato conosco</h1>
        <div className='flex flex-row h-full'>
          <div className='flex flex-col w-1/2 h-full'>
            <div className='flex flex-col justify-center items-start h-full gap-16'>
              <div className='flex flex-row justify-start items-center gap-5'>
                <Image src={blueLocation} alt='' />
                <p className='text-xl text-[--txt-secondary-color]'>Fazenda AGRO 3MIL, Porto Nacional, Tocantins</p>
              </div>
              <div className='flex flex-row justify-start items-center gap-5'>
                <Image src={blueWpp} alt='' />
                <p className='text-xl text-[--txt-secondary-color]'>(63) 98404-6603 / (63) 99962-0203</p>
              </div>
              <div className='flex flex-row justify-start items-center gap-5'>
                <Image src={blueEmail} alt='' />
                <p className='text-xl text-[--txt-secondary-color]'>ricdias1969@gmail.com</p>
              </div>
            </div>
          </div>
          <picture className='w-1/2 h-full'>
            <Image className='w-full h-full' src={map} alt='' />
          </picture>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Contact