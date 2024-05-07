import { IGalleryCard } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

const GalleryCard = ({data}: any | IGalleryCard) => {
  return (
    <div>
        <picture>
            <Image src={data.image} alt={`${data.title} gallery main image`} />
        </picture>
        <div>
            <h3>{data.title}</h3>
        </div>
    </div>
  )
}

export default GalleryCard