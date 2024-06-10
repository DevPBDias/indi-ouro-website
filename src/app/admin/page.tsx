"use client";

import React, { useState } from "react";
import AdminWho from "@/components/admin/AdminWho";
import AdminGallery from "@/components/admin/AdminGallery";

const Admin = () => {
  const [handleWhoTab, setHandleWhoTabs] = useState(true);
  const [handleGalleryTab, setHandleGalleryTabs] = useState(false);
  const [handleBullsTab, setHandleBullsTabs] = useState(false);
  const [handleContactTab, setHandleContactTabs] = useState(false);

  function whoTab() {
    setHandleWhoTabs(true);
    setHandleBullsTabs(false);
    setHandleContactTabs(false);
    setHandleGalleryTabs(false);
  }

  function bullsTab() {
    setHandleWhoTabs(false);
    setHandleBullsTabs(true);
    setHandleContactTabs(false);
    setHandleGalleryTabs(false);
  }

  function galleryTab() {
    setHandleWhoTabs(false);
    setHandleBullsTabs(false);
    setHandleContactTabs(false);
    setHandleGalleryTabs(true);
  }

  function contactTab() {
    setHandleWhoTabs(false);
    setHandleBullsTabs(false);
    setHandleContactTabs(true);
    setHandleGalleryTabs(false);
  }

  return (
    <div className="w-full px-[10%]">
      <nav className="w-full grid gap-4 grid-cols-4">
        <button
          className={`${
            handleWhoTab ? "border-[--primary-color] border-b-2" : ""
          } text-[--primary-color]  hover:bg-[--bg-secondary-color]  uppercase font-semibold py-4`}
          onClick={whoTab}
        >
          Quem somos
        </button>
        <button
          className={`${
            handleGalleryTab ? "border-[--primary-color] border-b-2" : ""
          } text-[--primary-color] hover:bg-[--bg-secondary-color]  uppercase font-semibold py-4`}
          onClick={galleryTab}
        >
          Galeria
        </button>
        <button
          className={`${
            handleBullsTab ? "border-[--primary-color] border-b-2" : ""
          } text-[--primary-color] hover:bg-[--bg-secondary-color] uppercase font-semibold py-4`}
          onClick={bullsTab}
        >
          Touros
        </button>
        <button
          className={`${
            handleContactTab ? "border-[--primary-color] border-b-2" : ""
          } text-[--primary-color]  hover:bg-[--bg-secondary-color]  uppercase font-semibold py-4`}
          onClick={contactTab}
        >
          Contato
        </button>
      </nav>
      <AdminWho handleWhoTab={handleWhoTab} />
      <AdminGallery handleGalleryTab={handleGalleryTab} />
      <div className={`${handleBullsTab ? "" : "hidden"}`}>
        <h3>Touros indi ouro de destaque</h3>
      </div>
      <div
        className={`${
          handleContactTab ? "" : "hidden"
        } flex flex-col justify-center items-center w-full mt-10`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <label htmlFor="adress">Endereço:</label>
          <input
            className="bg-[--bg-secondary-color] rounded-lg p-2"
            type="text"
            name=""
            id="adress"
          />
          <label htmlFor="phone">Número de telefone/Wpp:</label>
          <input
            className="bg-[--bg-secondary-color] rounded-lg p-2"
            type="text"
            name=""
            id="phone"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className="bg-[--bg-secondary-color] rounded-lg p-2"
            type="text"
            name=""
            id="email"
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
