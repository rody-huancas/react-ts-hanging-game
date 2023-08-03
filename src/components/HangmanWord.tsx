type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-[0.25em] text-6xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
