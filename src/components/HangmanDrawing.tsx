import { HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG } from "./Body";

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses).map((bodyPart, index) => (
        <div key={index}>{bodyPart}</div>
      ))}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[320px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}
