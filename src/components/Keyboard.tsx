import { KEYS } from "../helpers/keys";

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-9 gap-4">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`w-[100%] border-[3px] border-solid border-black text-4xl uppercase px-2 py-3 font-bold cursor-pointer text-black mt-3  ${
              isActive ? "bg-blue-600 text-white" : ""
            } ${isInactive ? "bg-red-600 text-white" : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
