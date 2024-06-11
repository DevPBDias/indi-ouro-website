import Footer from "@/components/footer/Footer";
import { galleryData } from "@/constants/galleryFarm";
import { IGalleryPhotos } from "@/interfaces";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

const FarmPhotos = () => {
  return (
    <main>
      <section className="flex flex-col flex-wrap px-[10%] gap-6 my-8">
        <h1 className="text-4xl uppercase font-bold text-[--primary-color]">
          Sede
        </h1>
        <div className="grid gap-4 grid-cols-4">
          <Suspense fallback={<Loading />}>
            {galleryData.map((data: IGalleryPhotos) => (
              <div key={data.id} className="w-full h-[450px]">
                <Image
                  src={data.image}
                  alt={data.description}
                  className="rounded-lg object-cover h-[85%] w-full"
                />
                <span className="bg-blue-300 w-full px-2 text-xs italic">
                  {data.description}
                </span>
              </div>
            ))}
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FarmPhotos;
