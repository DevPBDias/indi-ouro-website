import Footer from "@/components/footer/Footer";
import GalleryCard from "@/components/gallery/GalleryCard";
import { galleryData } from "@/constants/galleryData";
import { IGalleryCard } from "@/interfaces";
import React from "react";

const Gallery = () => {
  return (
    <main>
      <section className="flex flex-col flex-wrap px-[10%] gap-6 my-8">
        <h1 className="text-4xl uppercase font-bold text-[--primary-color]">
          Galeria de fotos
        </h1>
        <div className="grid gap-4 grid-cols-4">
          {galleryData.map((data: IGalleryCard) => (
            <GalleryCard key={data.id} data={data} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
