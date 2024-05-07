import Footer from '@/components/footer/Footer'
import GalleryCard from '@/components/gallery/GalleryCard'
import { galleryData } from '@/constants/galleryData'
import { IGalleryCard } from '@/interfaces'
import React from 'react'

const Gallery = () => {
  return (
    <main>
      <h1>Galeria de fotos</h1>
      <section>
        {
          galleryData.map((data: IGalleryCard) => <GalleryCard key={data.id} data={data} />)
        }
      </section>
      <Footer />
    </main>
  )
}

export default Gallery