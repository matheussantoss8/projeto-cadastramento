"use client";

import Image from "next/image";
import teste from "./img/curiositysearch-bro1.png";
import Seta from "@/app/img/image-seta.png";
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";
import CreateProjectButton from "@/components/NewProject";
import ActiveProjectSelect from "@/components/ActiveProjectSelect";
import { HiOutlineFolderOpen } from "react-icons/hi";
import CreateFirstProject from "@/components/CreateFirstProject";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-3">
          <HiOutlineFolderOpen className="w-12 h-12 text-black-500 mb-4" />
          <h1 className="text-2xl font-normal leading-48 text-center font-poppins mb-2">
            Meus Projetos
          </h1>
        </div>

        <div className="flex justify-center p-4 space-x-2">
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder="Faça sua busca..."
            className="flex-grow"
          />teste
          <ActiveProjectSelect />
          <div className="flex flex-col items-center space-y-2">
            <CreateProjectButton />
            <Image src={Seta} alt="seta img"/>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <CreateFirstProject />
            <Image
              src={teste}
              alt="Curiosity Search"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
