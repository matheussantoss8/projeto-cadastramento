"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../TextInput/TextInput";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/navigation"; // Importa o hook useRouter

const SideMenu: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log("Input Value:", value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const teste = localStorage.getItem("projects");
  const dataArray = teste ? JSON.parse(teste) : [];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();

  const handleProjectClick = (project: any) => {
    router.push(`/meusprojetos?id=${project.id}`);
  };

  console.log(dataArray, "aqi");

  return (
    <div className="fixed top-0 left-0 h-full p-4 w-333 shadow-2xl border-4 border-white">
      <div className="flex items-center mb-4">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="ml-2">Nome do Usuário</span>
        <IoIosNotificationsOutline />
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
      <div
        className="flex items-center mt-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <HiOutlineFolderOpen className="w-6 h-6 text-black-500 mr-2" />
        <span>Meus Projetos</span>
      </div>
      {isOpen && (
        <ul className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg">
          {dataArray.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              {item.name} - {item.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideMenu;
