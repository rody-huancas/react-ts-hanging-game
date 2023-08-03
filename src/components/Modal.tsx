interface ModalProps {
  message: string;
}

export const Modal: React.FC<ModalProps> = ({ message }) => {
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="h-[200px] fixed inset-0 flex justify-center items-center bg-opacity-75 z-50 mt-40">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-8">
        <span className="font-bold">{message}</span>
        <button
          className="w-1/2 text-xl uppercase bg-indigo-600 text-white px-5 py-3 rounded-md"
          onClick={handleReloadPage}
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
};
