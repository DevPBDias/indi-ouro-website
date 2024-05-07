import BullCard from '@/components/bulls/BullCard'
import Footer from '@/components/footer/Footer'
import { bullData } from '@/constants/bullsData'
import { IBullCard } from '@/interfaces'
import React from 'react'

const Bulls = () => {
  return (
    <main>
      <section className='flex flex-col flex-wrap px-[10%] gap-6 my-8'>
        <h1 className='text-4xl font-bold text-[--primary-color]'>TOUROS INDI OURO DE DESTAQUE</h1>
        <div className='grid gap-10 grid-cols-4'>
          {
            bullData.map((data: IBullCard) => <BullCard key={data.id} data={data} />)
          }
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Bulls