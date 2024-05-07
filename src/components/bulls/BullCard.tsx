import { IBullCard } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

const BullCard = ({ data }: any | IBullCard) => {
    return (
        <div className='w-full h-[415px] flex flex-col'>
            <picture className='w-full h-3/4 rounded-t-lg'>
                <Image className='w-full h-full rounded-t-lg' src={data.image} alt={`${data.name} image`} />
            </picture>
            <div className='w-full h-1/4 bg-[--bg-secondary-color] rounded-b-lg px-4 py-2 flex flex-col items-start justify-around'>
                <p className='text-lg text-[--primary-color] font-semibold'>Nome do animal: <span className='text-lg font-normal text-[--txt-secondary-color]'>{data.name}</span></p>
                <p className='text-lg text-[--primary-color] font-semibold'>Nome do Pai: <span className='text-lg font-normal text-[--txt-secondary-color]'>{data.fatherName}</span></p>
                <p className='text-lg text-[--primary-color] font-semibold'>iABCz: <span className='text-lg font-normal text-[--txt-secondary-color]'>{data.iABCz}</span></p>
            </div>
        </div>
    )
}

export default BullCard