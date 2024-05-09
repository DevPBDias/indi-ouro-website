import Image from "next/image";
import hero from '../../public/images/hero.png'
import WeatherCard from "@/components/Weather";

export default function Home() {
  return (
    <main>
      <picture>
        <Image src={hero} alt="farm bulls and trees"
          className="w-full h-[89vh]"
        />
      </picture>
      <div className="bg-[--secondary-color] h-10 fixed bottom-0 left-0 w-full flex flex-row items-center justify-between px-[10%]">
        <WeatherCard />
      </div>
    </main>
  );
}
