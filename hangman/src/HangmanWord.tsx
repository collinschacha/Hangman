type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, i) => {
        return (
          <span
            style={{
              borderBottom: ".1em solid black",
            }}
            key={i}
          >
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color: guessedLetters.includes(letter) ? "black" : "red",
              }}
            >
              {" "}
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
