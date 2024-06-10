"use client";

import { IGalleryCard } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GalleryCard = ({ data }: any | IGalleryCard) => {
  const router = useRouter();

  return (
    <div
      className="relative w-full h-full cursor-pointer hover:scale-[1.05]"
      onClick={() => router.push(`/gallery/${data.id}`)}
    >
      <picture className="w-full h-full">
        <Image
          className="w-full h-full"
          src={data.image}
          alt={`${data.title} gallery main image`}
        />
      </picture>
      <div className="absolute w-full h-16 bottom-0 left-0 flex items-center justify-center bg-blue-800/60 rounded-b-lg">
        <h3 className="text-[--txt-primary-color] text-2xl font-bold">
          {data.title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryCard;
