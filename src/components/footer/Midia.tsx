import React from "react";
import IconsBar from "../IconsBar";

const Midia = () => {
  return (
    <section className="flex flex-col justify-between items-start justify-items-center">
      <h3 className="font-semibold text-base uppercase text-[--secondary-color]">
        Siga-nos
      </h3>
      <p className="text-xs text-[--txt-primary-color]">
        Sim, também temos redes sociais. <br /> Fique antenado com as nossas
        novidades.
      </p>
      <IconsBar />
    </section>
  );
};

export default Midia;
