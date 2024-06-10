import React from "react";

const AdminWho = ({ handleWhoTab }: any | boolean) => {
  return (
    <div
      className={`${
        handleWhoTab ? "" : "hidden"
      } flex flex-col justify-center items-center w-full`}
    >
      <form className="mt-10 flex flex-col gap-8 justify-center items-center w-full">
        <div className="flex flex-col gap-3 w-3/4 justify-center items-start">
          <label htmlFor="who-text">Digite o texto da página Quem somos:</label>
          <textarea
            rows={18}
            maxLength={1400}
            className="bg-[--bg-secondary-color] rounded-lg p-2 w-full"
            id="who-text"
          />
        </div>
        <div className="flex flex-col gap-3 w-3/4 justify-center items-start">
          <label htmlFor="who-text">
            Selecione a imagem da página Quem somos: (formato png, jpg, jpeg)
          </label>
          <input type="file" name="" id="" />
        </div>
        <button
          className="text-[--primary-color] bg-[--secondary-color] font-bold w-max px-6 py-4 hover:bg-[--primary-color] hover:text-[--secondary-color] rounded-lg"
          type="submit"
        >
          Finalizar
        </button>
      </form>
    </div>
  );
};

export default AdminWho;
