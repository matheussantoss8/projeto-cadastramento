import SideMenu from "@/components/Menu";
import React from "react";

const MeusProjetos: React.FC = () => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 ml-64 p-4">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-4xl">Meus projetos aqui</div>
        </div>
      </div>
    </div>
  );
};

export default MeusProjetos;
