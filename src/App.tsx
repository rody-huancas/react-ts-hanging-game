import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing, HangmanWord, Keyboard, Modal } from "./components";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
      if (isLoser) {
        setIsModalOpen(true);
      }
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <>
      <div className="max-w-[800px] flex flex-col gap-2 mx-auto items-center mt-10">
        <h1 className="font-extrabold text-6xl uppercase mb-5">
          Juego del <span className="text-indigo-600">ahorcado</span>
        </h1>
        <div className="text-4xl text-center">
          {isLoser && <Modal message="Que pena, perdiste! Sigue intentando" />}
          {isWinner && <Modal message="Felicidades, ganaste esta ronda" />}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  );
};

export default App;
