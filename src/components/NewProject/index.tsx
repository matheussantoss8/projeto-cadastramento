import { useState } from "react";

const CreateProjectButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

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
          <h2 className="text-xl font-semibold mb-4">Teste</h2>
          <button
            onClick={toggleModal}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateProjectButton;
