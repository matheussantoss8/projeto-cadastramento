"use client"; // Adicione esta linha

import SideMenu from "@/components/Menu";
import ProjectDetailsGrid from "@/components/teste";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const MeusProjetos: React.FC = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const [project, setProject] = useState(null);

  console.log(searchParams, "meusprojetos");

  useEffect(() => {
    if (projectId) {
      const projects = JSON.parse(localStorage.getItem("projects") || "[]");
      const selectedProject = projects.find(
        (p: { id: string }) => p.id === projectId
      ); // Busca o projeto pelo ID
      setProject(selectedProject);
    }
  }, [projectId]);

  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 ml-64 p-4">
        <div className="flex items-center justify-center min-h-screen">
          <ProjectDetailsGrid project={project} />
          {/* Passa o projeto para o componente */}
        </div>
      </div>
    </div>
  );
};

export default MeusProjetos;
