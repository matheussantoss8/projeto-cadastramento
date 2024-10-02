import React, { useState } from "react";

interface Session {
  name: string;
  tasks: string[];
}

interface Project {
  id: number;
  name: string;
  date: string;
  session?: Session[];
}

interface ProjectDetailsGridProps {
  project: Project | null;
  onUpdateProject: (updatedProject: Project) => void;
}

const ProjectDetailsGrid: React.FC<ProjectDetailsGridProps> = ({
  project,
  onUpdateProject,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [inputTask, setInputTask] = useState("");
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  if (!project) {
    return <p>Carregando dados do projeto...</p>;
  }

  const handleAdd = () => {
    const newSession = inputValue.trim();
    if (newSession === "") return;

    setInputValue("");
    setShowInput(false);
  };

  const handleAddTask = () => {
    if (!selectedSession || inputTask.trim() === "") return;

    const updatedProject = {
      ...project,
      session: project.session?.map((sess) =>
        sess.name === selectedSession
          ? { ...sess, tasks: [...(sess.tasks || []), inputTask.trim()] }
          : sess
      ),
    };

    onUpdateProject(updatedProject);

    setInputTask("");
    setShowTaskInput(false);
  };

  console.log(
    project.session?.map((sess) => sess),
    "esta aqui"
  );

  return (
    <div className="flex flex-col items-start p-10 bg-gray-200">
      <h1>Nome do projeto: {project.name}</h1>

      {project.session && project.session.length > 0 && (
        <div className="mb-4">
          <h2 className="font-bold">Sessões:</h2>
          <ul className="list-disc pl-5">
            {project.session.map((sess, index) => (
              <li key={index}>
                <span>{sess.name}</span>
                <div>
                  <ul className="list-inside">
                    {sess.tasks?.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setSelectedSession(sess.name);
                      setShowTaskInput(true);
                    }}
                    className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Adicionar Task
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showTaskInput && (
        <>
          <input
            type="text"
            placeholder="Digite a task..."
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            className="mt-4 border border-gray-300 px-4 py-2 rounded-md"
          />
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleAddTask}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Adicionar Task
            </button>
            <button
              onClick={() => setShowTaskInput(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </>
      )}

      {!showInput && (
        <>
          <button
            onClick={() => setShowInput(true)}
            className="flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-md mb-4 shadow-md"
          >
            Adicionar Seção
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-md">
            CRIE SUA PRIMEIRA SESSÃO AQUI
          </button>
        </>
      )}

      {showInput && (
        <>
          <input
            type="text"
            placeholder="Digite algo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-4 border border-gray-300 px-4 py-2 rounded-md"
          />

          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Adicionar
            </button>

            <button
              onClick={() => setShowInput(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetailsGrid;
