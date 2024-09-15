"use client";

import Image from "next/image";
import teste from "./img/curiositysearch-bro1.png";
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Faça sua busca..."
      />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          teste
          <Image src={teste} alt="Curiosity Search" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
