"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../TextInput/TextInput";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineFolderOpen } from "react-icons/hi";

const SideMenu: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Input Value:", value);
  };

  return (
    <div className="fixed top-0 left-0 h-full p-4 w-64 shadow-2xl border-4 border-white">
      <div className="flex items-center mb-4">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="ml-2">Nome do Usuário</span>
      </div>
      <TextInput
        onInputChange={handleInputChange}
        placeholder="Faça sua busca..."
        className="flex-grow"
      />
      <div className="flex items-center mt-4">
        <FiCalendar className="w-5 h-5 text-black-500 mr-2" />
        <span>Calendário</span>
      </div>
      <div className="flex items-center mt-4">
        <Link
          href="/meusprojetos"
          className="flex items-center mt-4 text-left w-full"
        >
          <HiOutlineFolderOpen className="w-6 h-6 text-black-500 mr-2" />
          <span>Meus Projetos</span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
