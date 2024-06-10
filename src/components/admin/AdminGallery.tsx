import { galleryData } from "@/constants/galleryData";
import { IGalleryCard } from "@/interfaces";
import Image from "next/image";
import React from "react";

const AdminGallery = ({ handleGalleryTab }: any | boolean) => {
  return (
    <div
      className={`${
        handleGalleryTab ? "" : "hidden"
      } flex flex-col justify-center items-center w-full`}
    >
      <div className="grid gap-4 grid-cols-2 my-10 w-full">
        {galleryData.map((gallery: IGalleryCard) => (
          <div key={gallery.id} className=" w-full flex flex-row gap-5">
            <picture className="w-full h-full">
              <Image
                className="w-full h-full"
                src={gallery.image}
                alt={`${gallery.title} main photo`}
              />
            </picture>
            <div className="flex flex-col justify-around items-start">
              <p>{gallery.title}</p>
              <div className="flex flex-row gap-2">
                <label htmlFor="who-text">Trocar capa da galeria:</label>
                <select>
                  {galleryData.map((data: IGalleryCard) => (
                    <option key={data.id}>{data.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="who-text">Adicionar imagem na galeria:</label>
                <input type="file" name="" id="" />
              </div>
              <div className="flex flex-row w-full gap-4 justify-start items-center">
                <button
                  className=" text-[--primary-color] bg-[--secondary-color] font-bold w-max px-2 py-2 hover:bg-[--primary-color] hover:text-[--secondary-color] rounded-lg"
                  type="button"
                >
                  Excluir galeria
                </button>
                <button
                  className=" text-[--primary-color] bg-[--secondary-color] font-bold w-max px-2 py-2 hover:bg-[--primary-color] hover:text-[--secondary-color] rounded-lg"
                  type="button"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
