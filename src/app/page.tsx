import Image from "next/image";
import hero from '../../public/images/hero.png'

export default function Home() {
  return (
    <main className="mt-8">
      <Image src={ hero} alt="farm bulls and trees" />
      <div className="bg-[--secondary-color] h-10 fixed bottom-0 left-0 w-full flex flex-row items-center justify-between px-[10%]">
        Weather
      </div>
    </main>
  );
}
