import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import moment from "moment";

const CreateProjectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const toggleModal = () => setIsOpen(!isOpen);

  const handleCreate = () => {
    const existingProjects = JSON.parse(
      localStorage.getItem("projects") || "[]"
    );

    const newProject = {
      name: inputValue,
      date: moment().format("YYYY-MM-DD"), 
    };

    existingProjects.push(newProject);

    localStorage.setItem("projects", JSON.stringify(existingProjects));
    toggleModal();
    setInputValue("");
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleModal}
        className="bg-custom-button text-white px-4 py-2 rounded"
      >
        Novo Projeto +
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-6 rounded-lg shadow-lg w-96 max-w-sm z-10">
          nome
          <TextInput
            value={inputValue}
            onInputChange={handleInputChange}
            placeholder="Faça sua busca..."
            className="flex-grow"
          />
          <h2 className="text-xl font-semibold mb-4">Teste</h2>
          <button onClick={toggleModal}>Fechar</button>
          <button onClick={handleCreate}>Criar</button>
        </div>
      )}
    </div>
  );
};

export default CreateProjectButton;
