import Image from "next/image";
import Link from "next/link";
import React from "react";
import adminIcon from "../../../public/icons/adminIcon.png";

const AdminBtn = () => {
  return (
    <Link
      href="/login"
      className="opacity-0 hover:opacity-100 m-auto w-9 h-9 absolute top-6 right-4"
    >
      <Image className="w-full h-full" src={adminIcon} alt="admin icon" />
    </Link>
  );
};

export default AdminBtn;
