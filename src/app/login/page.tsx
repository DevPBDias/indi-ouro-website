"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  return (
    <form className="bg-[--primary-color] m-auto mt-36 flex flex-col justify-center items-center gap-3 p-5 w-1/4">
      <div className="flex flex-col justify-center items-start gap-3 w-full">
        <label htmlFor="email">Email</label>
        <input className="w-full py-1" type="email" name="" id="email" />
        <label htmlFor="password">Senha</label>
        <input className="w-full py-1" type="password" name="" id="password" />
      </div>
      <button
        className="bg-[--secondary-color] text-[--primary-color] font-bold p-2 w-max rounded-lg"
        type="button"
        onClick={() => router.push("/admin")}
      >
        Entrar
      </button>
    </form>
  );
};

export default Login;
