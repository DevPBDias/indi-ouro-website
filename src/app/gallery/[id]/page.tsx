"use client";

import Footer from "@/components/footer/Footer";
import GalleryCard from "@/components/gallery/GalleryCard";
import { galleryData } from "@/constants/galleryData";
import { IGalleryCard } from "@/interfaces";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const GalleryDetails = ({ params }: { params: { id: string | number } }) => {
  const galleryId = params.id;
  const filteredGallery = galleryData?.filter(
    (gallery: IGalleryCard) => gallery.id === Number(galleryId)
  );

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <section className="flex flex-col flex-wrap px-[10%] gap-6 my-8">
          <h1 className="text-4xl uppercase font-bold text-[--primary-color]">
            {filteredGallery[0]?.title}
          </h1>
          <div className="grid gap-4 grid-cols-4">
            {galleryData.map((data: IGalleryCard) => (
              <GalleryCard key={data.id} data={data} />
            ))}
          </div>
        </section>
      </Suspense>
      <Footer />
    </main>
  );
};

export default GalleryDetails;
