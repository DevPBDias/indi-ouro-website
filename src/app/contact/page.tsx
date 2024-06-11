import Footer from "@/components/footer/Footer";
import Image from "next/image";
import React from "react";
import blueEmail from "../../../public/icons/blueEmail.png";
import blueWpp from "../../../public/icons/blueWpp.png";
import blueLocation from "../../../public/icons/blueLocation.png";

const Contact = () => {
  return (
    <main>
      <section className="flex flex-col px-[10%] my-8 py-10 gap-3 h-[638px]">
        <h1 className="text-4xl uppercase font-bold text-[--primary-color]">
          Entre em contato conosco
        </h1>
        <div className="flex flex-row h-full">
          <div className="flex flex-col w-1/2 h-full">
            <div className="flex flex-col justify-center items-start h-full gap-16">
              <div className="flex flex-row justify-center items-center gap-4">
                <Image src={blueLocation} alt="" />
                <p className="text-xl text-[--txt-secondary-color]">
                  Fazenda AGRO 3MIL, Porto Nacional, Tocantins
                </p>
                <a
                  className="bg-[--primary-color] p-3 rounded shadow text-[--secondary-color] font-bold"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.google.com/maps/dir//Fazenda+AGRO+3MIL+-+Rodovia+TO-255+Entrada+%C3%A0+esquerda+pr%C3%B3ximo+%C3%A0+Escola+Brasil+Sent.+F%C3%A1tima+17Km+da+TO-255+Zona+Rural,+Porto+Nacional+-+TO,+77500-000/@-10.7969893,-48.6226236,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x933b7996fc8955a5:0x18975f2bc9976613!2m2!1d-48.6226236!2d-10.7969893?entry=ttu"
                >
                  Rota da fazenda
                </a>
              </div>
              <div className="flex flex-row justify-start items-center gap-5">
                <Image src={blueWpp} alt="" />
                <p className="text-xl text-[--txt-secondary-color]">
                  (63) 98404-6603 / (63) 99962-0203
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-5">
                <Image src={blueEmail} alt="" />
                <p className="text-xl text-[--txt-secondary-color]">
                  ricdias1969@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
