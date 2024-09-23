import React from "react";

interface Project {
  id: string;
  name: string;
  date: string;
}

interface ProjectDetailsGridProps {
  project: Project | null;
}

const ProjectDetailsGrid: React.FC<ProjectDetailsGridProps> = ({ project }) => {
  console.log(project, "tta qaqiu");

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <h2>{project?.name} teste</h2> {/* Exibe o nome do projeto */}
      <p>Data: {project?.date}</p> {/* Exibe a data do projeto */}
    </div>
  );
};

export default ProjectDetailsGrid;
